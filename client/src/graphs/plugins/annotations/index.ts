import { ref, watch } from "vue";
import type { Aggregator } from "@graph/types";
import type { Coordinate } from "@shape/types";
import { generateId } from "@utils/id";
import { shapes } from "@shapes";
import colors from "@utils/colors";
import type { Color } from "@utils/colors";
import type { GraphMouseEvent } from "@graph/base/types";
import { BRUSH_WEIGHTS, COLORS } from "./constants";
import { useAnnotationHistory } from "./history";
import type { Annotation } from "./types";
import type { BaseGraph } from "@graph/base";

export const useAnnotations = (graph: BaseGraph) => {
  const selectedColor = ref<Color>(COLORS[0])
  const selectedBrushWeight = ref(BRUSH_WEIGHTS[1])
  const erasing = ref(false)
  const erasedScribbleIds = ref(new Set<string>())

  const batch = ref<Coordinate[]>([])
  const scribbles = ref<Annotation[]>([])
  const isDrawing = ref(false)
  const lastPoint = ref<Coordinate>()

  const isActive = ref(false)

  const history = useAnnotationHistory(scribbles)

  const clear = () => {
    if (scribbles.value.length === 0) return

    history.addToUndoStack({
      action: 'remove',
      annotations: scribbles.value,
    })

    scribbles.value = []
  }

  /**
   * starts drawing from the current mouse position
   */
  const startDrawing = ({ coords }: GraphMouseEvent) => {
    isDrawing.value = true;

    lastPoint.value = coords;
    batch.value = [coords];
  };

  /**
   * draws a line that connects two points.
   * the delta between two mouse points while
   * mouse is being dragged
   */
  const drawLine = ({ coords }: GraphMouseEvent) => {
    if (!isDrawing.value || !lastPoint.value) return;

    if (erasing.value) {
      const erasedScribbles = scribbles.value.filter(scribble => {
        const shape = shapes.scribble(scribble)
        return shape.hitbox(coords)
      })

      for (const erasedScribble of erasedScribbles) {
        erasedScribbleIds.value.add(erasedScribble.id)
      }

      return;
    }

    lastPoint.value = coords;
    batch.value.push(coords);
  };

  const stopDrawing = () => {
    if (!isDrawing.value) return;

    isDrawing.value = false;
    lastPoint.value = undefined;

    if (batch.value.length === 0) return;

    if (erasing.value) {
      const erasedScribbles = scribbles.value.filter(scribble => {
        return erasedScribbleIds.value.has(scribble.id)
      })

      history.addToUndoStack({
        action: 'remove',
        annotations: erasedScribbles
      })

      scribbles.value = scribbles.value.filter(scribble => {
        return !erasedScribbleIds.value.has(scribble.id)
      })

      erasedScribbleIds.value.clear()
      return;
    }

    const scribble = {
      id: generateId(),
      type: 'draw',
      points: batch.value,
      color: selectedColor.value,
      brushWeight: selectedBrushWeight.value,
    } as const;

    scribbles.value.push(scribble);

    history.addToUndoStack({
      action: 'add',
      annotations: [scribble]
    })

    batch.value = [];
  };

  watch(erasing, () => {
    if (!graph.canvas.value) return;
    graph.canvas.value.style.cursor = erasing.value ? 'none' : 'crosshair';
  })

  const addScribblesToAggregator = (aggregator: Aggregator) => {
    if (!isActive.value) return aggregator

    if (erasing.value) {
      const circle = shapes.circle({
        at: graph.graphAtMousePosition.value.coords,
        radius: 10,
        color: colors.TRANSPARENT,
        stroke: {
          color: colors.WHITE + '60',
          width: 2,
        }
      })

      aggregator.push({
        graphType: "annotation",
        id: circle.id,
        shape: circle,
        priority: 5050,
      })
    } else if (batch.value.length > 0) {
      const incompleteScribble = shapes.scribble({
        type: 'draw',
        points: batch.value,
        color: selectedColor.value,
        brushWeight: selectedBrushWeight.value,
      })

      aggregator.push({
        graphType: "annotation",
        id: incompleteScribble.id,
        shape: incompleteScribble,
        priority: 5001,
      })
    }

    for (const scribble of scribbles.value) {
      const isErased = erasedScribbleIds.value.has(scribble.id)
      aggregator.push({
        graphType: "annotation",
        id: scribble.id,
        shape: shapes.scribble({
          ...scribble,
          color: scribble.color + (isErased ? '50' : ''),
        }),
        priority: 5000,
      })
    }

    return aggregator
  }

  graph.updateAggregator.push(addScribblesToAggregator)

  const activate = () => {
    if (!graph.canvas.value) return;

    isActive.value = true;
    graph.settings.value.userEditable = false;
    graph.settings.value.marquee = false;
    graph.settings.value.focusable = false;
    graph.graphCursorDisabled.value = true;

    graph.canvas.value.style.cursor = 'crosshair';

    graph.subscribe('onMouseDown', startDrawing)
    graph.subscribe('onMouseMove', drawLine)
    graph.subscribe('onMouseUp', stopDrawing)
  }

  const deactivate = () => {
    if (!graph.canvas.value) return;

    isActive.value = false;
    erasing.value = false;

    graph.settings.value.userEditable = true;
    graph.settings.value.marquee = true;
    graph.settings.value.focusable = true;
    graph.graphCursorDisabled.value = false;

    graph.canvas.value.style.cursor = 'default';

    graph.unsubscribe('onMouseDown', startDrawing)
    graph.unsubscribe('onMouseMove', drawLine)
    graph.unsubscribe('onMouseUp', stopDrawing)
  }

  return {
    clearAnnotations: clear,
    annotationActive: isActive,

    annotationErasing: erasing,
    annotationColor: selectedColor,
    annotationBrushWeight: selectedBrushWeight,

    activateAnnotation: activate,
    deactivateAnnotation: deactivate,

    undoAnnotation: history.undo,
    redoAnnotation: history.redo,
    canUndoAnnotation: history.canUndo,
    canRedoAnnotation: history.canRedo,
  }
}