import type {
  Text,
  Stroke,
  Coordinate,
  Shape
} from "@shape/types"
import { rectHitbox } from "./hitbox"
import { drawRectWithCtx } from "./draw"
import { generateId } from "@graph/helpers"

export type Rect = {
  at: Coordinate
  width: number
  height: number
  color?: string
  stroke?: Stroke
  text?: Text
  borderRadius?: number
  rotation?: number
}

export const RECT_DEFAULTS = {
  color: 'black',
  borderRadius: 0,
  rotation: 0,
} as const

export const rect = (options: Rect): Shape => {

  if (options.borderRadius && options.borderRadius < 0) {
    throw new Error('borderRadius must be positive')
  }

  const drawShape = drawRectWithCtx(options)
  const hitbox = rectHitbox(options)

  const draw = (ctx: CanvasRenderingContext2D) => {
    drawShape(ctx)
  }

  return {
    id: generateId(),
    name: 'rect',

    draw,
    drawShape,


    hitbox
  }
}