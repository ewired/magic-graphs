/*
  types for shapes
*/

export type ShapeName = 'circle' | 'line' | 'square' | 'rect' | 'triangle' | 'arrow' | 'uturn'

export type Shape = {
  id: string,
  name: ShapeName,
  draw: (ctx: CanvasRenderingContext2D) => void,
  hitbox: (point: Coordinate) => boolean,
}

export type Coordinate = {
  x: number,
  y: number,
}

export type TextFontWeight = 'lighter' | 'normal' | 'bold' | 'bolder'

// the actual text
export type Text = {
  content: string,
  fontSize?: number,
  fontWeight?: TextFontWeight,
  color?: string,
}

export const TEXT_DEFAULTS = {
  fontSize: 12,
  fontWeight: 'normal',
  color: 'black',
} as const

// the area in which text is displayed
export type TextAreaNoLocation = {
  text: Text,
  color?: string,
  editable?: boolean,
}

export const TEXTAREA_DEFAULTS = {
  color: 'white',
  editable: true
} as const

export type TextArea = {
  at: Coordinate,
} & TextAreaNoLocation

export type Stroke = {
  color: string,
  width: number,
}



export type Arrow = Line

export const ARROW_DEFAULTS = LINE_DEFAULTS

export type Triangle = {
  point1: Coordinate,
  point2: Coordinate,
  point3: Coordinate,
  color?: string,
}

export const TRIANGLE_DEFAULTS = {
  color: 'black',
} as const

export type UTurnArrow = {
  spacing: number,
  center: Coordinate,
  upDistance: number,
  downDistance: number,
  angle: number,
  lineWidth: number,
  color?: string,
  textArea?: TextAreaNoLocation
}

export const UTURN_ARROW_DEFAULTS = {
  color: 'black',
} as const