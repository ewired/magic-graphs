import { ref } from 'vue'
import type { Ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type {
  GEdge,
  GNode,
  Aggregator,
  GraphOptions,
} from '@graph/types'
import { useTheme } from '@graph/themes/useTheme'
import { useNodeAnchorGraph } from '@graph/compositions/useNodeAnchorGraph'
import { MARQUEE_CONSTANTS } from '@graph/compositions/useMarqueeGraph/types'
import { getValue } from '@graph/helpers'
import colors from '@colors'
import { rect } from '@shapes'
import type { BoundingBox } from "@shape/types";

export const useMarqueeGraph = (
  canvas: Ref<HTMLCanvasElement | undefined | null>,
  options: Partial<GraphOptions> = {},
) => {
  const graph = useNodeAnchorGraph(canvas, options)

  const marqueeBox = ref<BoundingBox | undefined>()
  const encapsulatedNodeBox = ref<BoundingBox | undefined>()

  const marqueeSelectedItems = ref(new Set<string>())
  const mouseState = { x: 0, y: 0, heldDown: false }

  const { setTheme, removeTheme } = useTheme(graph, MARQUEE_CONSTANTS.THEME_ID)

  const hideNodeAnchors = () => setTheme('nodeAnchorColor', colors.TRANSPARENT)
  const showNodeAnchors = () => removeTheme('nodeAnchorColor')

  const getSurfaceArea = (box: BoundingBox) => {
    const { width, height } = box
    return Math.abs(width * height)
  }

  const disableNodeCreationNextTick = () => {
    const callbacks = graph.eventBus['onDblClick']

    let nodeCreationFn;
    for (const callback of callbacks) {
      if (callback.name === 'handleNodeCreation') {
        nodeCreationFn = callback
        break
      }
    }

    if (!nodeCreationFn) {
      console.error('Could not find node creation function')
      return
    }

    graph.unsubscribe('onDblClick', nodeCreationFn)
    setTimeout(() => graph.subscribe('onDblClick', nodeCreationFn), 10)
  }

  /**
   * resets the state of the marquee which includes clearing marquee selected items
   * and dismissing the encapsulated node box
   */
  const clearMarqueeSelection = () => {
    marqueeSelectedItems.value.clear()
    encapsulatedNodeBox.value = undefined
    showNodeAnchors()
  }

  /**
   * given a mouse event, engages or disengages the marquee box
   */
  const handleMarqueeEngagement = (event: MouseEvent) => {
    const { offsetX: x, offsetY: y } = event
    const topItem = graph.getSchemaItemsByCoordinates(x, y).pop()
    mouseState.x = x;
    mouseState.y = y;
    if (!topItem) return engageMarqueeBox({ x, y })
    else if (topItem.graphType !== 'marquee-selection-area') clearMarqueeSelection()
  }

  graph.subscribe('onMouseDown', () => mouseState.heldDown = true)
  graph.subscribe('onMouseUp', () => mouseState.heldDown = false)

  const dragEncapsulatedNodes = (event: MouseEvent) => {
    if (marqueeBox.value || !mouseState.heldDown) return;
    const { offsetX: x, offsetY: y } = event
    const topItem = graph.getSchemaItemsByCoordinates(x, y).pop()
    if (topItem?.graphType !== 'marquee-selection-area') return
    const dx = x - mouseState.x
    const dy = y - mouseState.y
    mouseState.x = x
    mouseState.y = y
    for (const id of marqueeSelectedItems.value) {
      const node = graph.getNode(id)
      if (!node) continue
      graph.moveNode(node.id, {
        x: node.x + dx,
        y: node.y + dy
      })
    }
    updateEncapsulatedNodeBox()
  }

  const initializeEncapsulatedNodeBox = () => {
    encapsulatedNodeBox.value = {
      at: { x: Infinity, y: Infinity },
      width: 0,
      height: 0,
    }
  }

  const engageMarqueeBox = (startingCoords: { x: number, y: number }) => {
    hideNodeAnchors()
    marqueeBox.value = {
      at: startingCoords,
      width: 0,
      height: 0,
    }
    initializeEncapsulatedNodeBox()
  }

  const disengageMarqueeBox = () => {
    if (!marqueeBox.value) return
    const surfaceArea = getSurfaceArea(marqueeBox.value)
    if (surfaceArea > 200) disableNodeCreationNextTick()
    marqueeBox.value = undefined
    graph.repaint('marquee-graph/disengage-marquee-box')()
  }

  const updateSelectedItems = (box: BoundingBox) => {
    const surfaceArea = getSurfaceArea(box)
    if (surfaceArea < 100) return
    marqueeSelectedItems.value.clear()

    for (const { id, shape, graphType } of graph.aggregator.value) {
      const { marqueeSelectableGraphTypes } = graph.settings.value
      if (!marqueeSelectableGraphTypes.includes(graphType)) continue
      const inSelectionBox = shape.efficientHitbox(box)
      if (inSelectionBox) marqueeSelectedItems.value.add(id)
    }

    updateEncapsulatedNodeBox()
  }

  const updateEncapsulatedNodeBox = () => {
    if (!encapsulatedNodeBox.value) return

    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    for (const id of marqueeSelectedItems.value) {
      const node = graph.getNode(id);
      if (!node) continue;

      const nodeRadius = graph.getTheme('nodeSize', node);
      const nodeBorderWidth = graph.getTheme('nodeBorderWidth', node);
      const nodeArea = nodeRadius + (nodeBorderWidth / 2);
      const { x, y } = node;

      minX = Math.min(minX, x - nodeArea);
      minY = Math.min(minY, y - nodeArea);
      maxX = Math.max(maxX, x + nodeArea);
      maxY = Math.max(maxY, y + nodeArea);
    }

    if (minX < Infinity && minY < Infinity && maxX > -Infinity && maxY > -Infinity) {
      encapsulatedNodeBox.value.at.x = minX;
      encapsulatedNodeBox.value.at.y = minY;
      encapsulatedNodeBox.value.width = maxX - minX;
      encapsulatedNodeBox.value.height = maxY - minY;
    } else {
      encapsulatedNodeBox.value.width = 0;
      encapsulatedNodeBox.value.height = 0;
    }

    graph.repaint('marquee-graph/update-encapsulated-node-box')()
  };


  const updateSelectionBoxDimensions = (event: MouseEvent) => {
    if (!marqueeBox.value) return
    const { offsetX: x, offsetY: y } = event
    marqueeBox.value.width = x - marqueeBox.value.at.x
    marqueeBox.value.height = y - marqueeBox.value.at.y
    updateSelectedItems(marqueeBox.value)
    graph.repaint('marquee-graph/update-selection-box')()
  }

  const getSelectionBoxSchema = (box: BoundingBox) => {
    const shape = rect({
      ...box,
      color: graph.getTheme('marqueeSelectionBoxColor'),
      stroke: {
        color: graph.getTheme('marqueeSelectionBoxBorderColor'),
        width: 1,
      }
    })

    return {
      id: 'marquee-selection-box',
      graphType: 'marquee-selection-box',
      shape,
      priority: Infinity,
    } as const
  }

  const addSelectionBoxToAggregator = (aggregator: Aggregator) => {
    if (!marqueeBox.value) return aggregator
    const selectionBoxSchemaItem = getSelectionBoxSchema(marqueeBox.value)
    aggregator.push(selectionBoxSchemaItem)
    return aggregator
  }

  const getSelectionAreaSchema = (box: BoundingBox) => {
    const shape = rect({
      ...box,
      color: colors.AMBER_500 + '33',
      stroke: {
        color: colors.AMBER_500,
        width: 1
      }
    })

    return {
      id: 'marquee-selection-area',
      graphType: 'marquee-selection-area',
      shape,
      priority: Infinity,
    } as const
  }

  const addSelectionAreaToAggregator = (aggregator: Aggregator) => {
    if (!encapsulatedNodeBox.value) return aggregator
    const selectionAreaSchemaItem = getSelectionAreaSchema(encapsulatedNodeBox.value)
    aggregator.push(selectionAreaSchemaItem)
    return aggregator
  }

  graph.updateAggregator.push(addSelectionBoxToAggregator)
  graph.updateAggregator.push(addSelectionAreaToAggregator)

  const colorMarqueedNodes = (node: GNode) => {
    const isMarqueed = marqueeSelectedItems.value.has(node.id)
    if (isMarqueed) return getValue(graph.theme.value.nodeFocusColor, node)
  }

  const colorMarqueedNodeBorders = (node: GNode) => {
    const isMarqueed = marqueeSelectedItems.value.has(node.id)
    if (isMarqueed) return getValue(graph.theme.value.nodeFocusBorderColor, node)
  }

  const colorMarqueedEdges = (edge: GEdge) => {
    const isMarqueed = marqueeSelectedItems.value.has(edge.id)
    if (isMarqueed) return getValue(graph.theme.value.edgeFocusColor, edge)
  }

  setTheme('nodeColor', colorMarqueedNodes)
  setTheme('nodeBorderColor', colorMarqueedNodeBorders)

  setTheme('edgeColor', colorMarqueedEdges)

  onClickOutside(canvas, () => marqueeSelectedItems.value.clear())

  graph.subscribe('onMouseDown', (ev) => {
    if (marqueeBox.value) return
    const { offsetX: x, offsetY: y } = ev
    const topItem = graph.getSchemaItemsByCoordinates(x, y).pop()
    if (!topItem || topItem.graphType !== 'marquee-selection-area') {
      clearMarqueeSelection()
    }
  })

  /**
   * takes a list of item ids and creates a marquee selection around them
   */
  const setMarqueeSelectedItems = (itemIds: string[]) => {
    marqueeSelectedItems.value = new Set(itemIds)
    initializeEncapsulatedNodeBox()
    updateEncapsulatedNodeBox()
  }

  const activate = () => {
    graph.subscribe('onMouseDown', handleMarqueeEngagement)
    graph.subscribe('onMouseMove', dragEncapsulatedNodes)
    graph.subscribe('onMouseUp', disengageMarqueeBox)
    graph.subscribe('onContextMenu', disengageMarqueeBox)
    graph.subscribe('onMouseMove', updateSelectionBoxDimensions)
  }

  const deactivate = () => {
    graph.unsubscribe('onMouseDown', handleMarqueeEngagement)
    graph.unsubscribe('onMouseMove', dragEncapsulatedNodes)
    graph.unsubscribe('onMouseUp', disengageMarqueeBox)
    graph.unsubscribe('onContextMenu', disengageMarqueeBox)
    graph.unsubscribe('onMouseMove', updateSelectionBoxDimensions)
    if (marqueeBox.value) disengageMarqueeBox()
  }

  graph.subscribe('onSettingsChange', (diff) => {
    if (diff.marquee === true) activate()
    else if (diff.marquee === false) deactivate()
  })

  if (graph.settings.value.marquee) activate()

  return {
    ...graph,

    /**
     * a set containing the ids of all items in the current marquee selection
     */
    marqueeSelectedItems,

    /**
     * @param itemId a node or edge id
     * @returns true if the item is marquee-selected or focused
     */
    isHighlighted: (itemId: string) => (
      marqueeSelectedItems.value.has(itemId) ||
      graph.focusedItemId.value === itemId
    ),

    setMarqueeSelectedItems,
    clearMarqueeSelection,
  }
}