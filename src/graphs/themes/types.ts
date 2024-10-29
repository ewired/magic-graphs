import type { NodeAnchorGraphTheme } from "@graph/compositions/useNodeAnchorGraph"
import type { MaybeGetter, MaybeGetterParams, UnwrapMaybeGetter } from "@graph/types"

export type GraphTheme = NodeAnchorGraphTheme
export type GraphThemeKey = keyof GraphTheme

/**
 * decomposes MaybeGetter<T, K> such that it turns T into T | void
 */
export type MaybeGetterOrVoid<T> = MaybeGetter<UnwrapMaybeGetter<T> | void, MaybeGetterParams<T>>

export type ThemeMapEntry<T extends GraphThemeKey> = {
  value: MaybeGetterOrVoid<GraphTheme[T]>,
  useThemeId: string,
}

export type FullThemeMap = {
  [K in GraphThemeKey]: ThemeMapEntry<K>[]
}

export type PartialThemeMap = Partial<FullThemeMap>

export const getInitialThemeMap: () => FullThemeMap = () => ({
  /**
   * base themes
   */
  nodeSize: [] as ThemeMapEntry<'nodeSize'>[],
  nodeBorderWidth: [] as ThemeMapEntry<'nodeBorderWidth'>[],
  nodeColor: [] as ThemeMapEntry<'nodeColor'>[],
  nodeBorderColor: [] as ThemeMapEntry<'nodeBorderColor'>[],
  nodeFocusColor: [] as ThemeMapEntry<'nodeFocusColor'>[],
  nodeFocusBorderColor: [] as ThemeMapEntry<'nodeFocusBorderColor'>[],
  nodeText: [] as ThemeMapEntry<'nodeText'>[],
  nodeFocusTextColor: [] as ThemeMapEntry<'nodeFocusTextColor'>[],
  nodeTextSize: [] as ThemeMapEntry<'nodeTextSize'>[],
  nodeTextColor: [] as ThemeMapEntry<'nodeTextColor'>[],
  nodeShape: [] as ThemeMapEntry<'nodeShape'>[],
  edgeColor: [] as ThemeMapEntry<'edgeColor'>[],
  edgeWidth: [] as ThemeMapEntry<'edgeWidth'>[],
  edgeTextSize: [] as ThemeMapEntry<'edgeTextSize'>[],
  edgeTextColor: [] as ThemeMapEntry<'edgeTextColor'>[],
  edgeFocusTextColor: [] as ThemeMapEntry<'edgeFocusTextColor'>[],
  edgeTextFontWeight: [] as ThemeMapEntry<'edgeTextFontWeight'>[],
  edgeFocusColor: [] as ThemeMapEntry<'edgeFocusColor'>[],

  graphBgColor: [] as ThemeMapEntry<'graphBgColor'>[],
  graphBgPatternColor: [] as ThemeMapEntry<'graphBgPatternColor'>[],

  /**
   * node anchor themes
   */
  nodeAnchorRadius: [] as ThemeMapEntry<'nodeAnchorRadius'>[],
  nodeAnchorColor: [] as ThemeMapEntry<'nodeAnchorColor'>[],
  nodeAnchorColorWhenParentFocused: [] as ThemeMapEntry<'nodeAnchorColorWhenParentFocused'>[],
  linkPreviewColor: [] as ThemeMapEntry<'linkPreviewColor'>[],
  linkPreviewWidth: [] as ThemeMapEntry<'linkPreviewWidth'>[],
})
