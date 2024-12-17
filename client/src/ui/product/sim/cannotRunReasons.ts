
const minNodeText = (minNodes: number) => {
  if (minNodes === 1) return 'Requires at least 1 node'
  return `Requires at least ${minNodes} nodes` as const
}

const minEdgeText = (minEdges: number) => {
  if (minEdges === 1) return 'Requires at least 1 edge'
  return `Requires at least ${minEdges} edges` as const
}

const invalidText = (thing?: string) => {
  if (!thing) return 'Invalid graph'
  return `Requires valid ${thing}` as const
}

/**
 * a map to from standard reasons why a simulation
 * cannot run on a given graph to user-facing text explaining why
 */
export const CANT_RUN_REASONS = {
  INVALID: invalidText,
  NOT_WEIGHTED: 'Requires weighted edges',
  NOT_UNWEIGHTED: 'Requires unweighted edges',
  NOT_DIRECTED: 'Requires directed graph',
  NOT_UNDIRECTED: 'Requires undirected graph',
  NOT_ENOUGH_NODES: minNodeText,
  NOT_ENOUGH_EDGES: minEdgeText,
  NOT_CONNECTED: 'Requires connected graph',
  NOT_ACYCLIC: 'Requires acyclic graph',
  NOT_BIPARTITE: 'Requires bipartite graph',
  NOT_PLANAR: 'Requires planar graph',
  NEGATIVE_EDGE_WEIGHTS: 'Requires non-negative edge weights',
  NON_POSITIVE_EDGE_WEIGHTS: 'Requires positive edge weights',
  NOT_BIDIRECTIONAL: 'Requires no bidirectional edges',
} as const