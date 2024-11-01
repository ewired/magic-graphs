import { onMounted, ref, watch } from "vue"
import type { Ref } from "vue"
import colors from "@colors"
import type { Coordinate, Shape } from "@shape/types"
import { circle } from "@shapes"
import type { Circle } from "@shape/circle"
import { getCtx } from "@utils/ctx"
import { debounce } from "@utils/debounce"

/**
 * the color when the point is not hitting any shape
 */
const MISS_COLOR = colors.GREEN_500

/**
 * the color when the point is hitting a shape, but not an embedded text area
 */
const HIT_COLOR = colors.RED_500

/**
 * the color when the point is hitting a text area of a shape
 */
const TEXT_HIT_COLOR = colors.YELLOW_500

/**
 * effortlessly figure out which parts of the canvas are being hit by shapes
 *
 * @param canvas the canvas element
 * @param drawItems the shapes being rendered on the canvas
 * @returns heatmap controls
 */
export const useHeatmap = (
  targetCanvas: Ref<HTMLCanvasElement | null | undefined>,
  drawItems: Ref<Shape[]>
) => {
  const active = ref(false)
  const resolution = ref(4)
  const pointsSampled = ref(0)

  const canvas = document.createElement("canvas")

  const initCanvas = () => {
    if (!targetCanvas.value) throw new Error('target canvas not found')
    const { width, height } = targetCanvas.value.getBoundingClientRect()
    console.log('width', width, 'height', height)
    canvas.width = width
    canvas.height = height
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.pointerEvents = 'none'
    const canvasContainer = document.getElementById('responsive-canvas-container')
    if (!canvasContainer) throw new Error('Canvas container not found')
    canvasContainer.appendChild(canvas)
  }

  const processPoint = (coords: Coordinate) => {
    const shapeHit = drawItems.value
      .findLast((item) => item.hitbox(coords))

    const textHit = drawItems.value
      .findLast((item) => item.textHitbox?.(coords))

    const circleSchema: Circle = {
      at: coords,
      radius: 2,
      color: MISS_COLOR,
    }

    if (textHit) circleSchema.color = TEXT_HIT_COLOR
    else if (shapeHit) circleSchema.color = HIT_COLOR

    const ctx = getCtx(canvas)
    circle(circleSchema).draw(ctx)
  }

  const run = async () => {
    const ctx = getCtx(canvas)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    pointsSampled.value = 0

    if (!canvas || !active.value) return

    const { width, height } = canvas.getBoundingClientRect();

    for (let y = 0; y < height; y += resolution.value) {
      for (let x = 0; x < width; x += resolution.value) {
        if (pointsSampled.value % 20_000 === 0) await new Promise((resolve) => setTimeout(resolve, 10))
        processPoint({ x, y })
        pointsSampled.value++
      }
    }
  }
  watch(active, run)

  const debouncedRunner = debounce(run, 500)
  watch(resolution, run)
  watch(drawItems, debouncedRunner)

  setTimeout(initCanvas, 500)

  return {
    heatmapActive: active,
    heatmapResolution: resolution,
    runHeatmap: run,
    runHeatmapDebounced: debouncedRunner,
    pointsSampled,
  }
};