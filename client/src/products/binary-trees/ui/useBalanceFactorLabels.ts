import type { Graph } from "@graph/types";
import type { TreeControls } from "../useTree";
import { useNodeLabel } from "./useNodeLabel";

export const useBalanceFactorLabels = (graph: Graph, tree: TreeControls) => useNodeLabel(
  graph,
  tree.nodeIdToBalanceFactor,
  'node-balance-factor'
)