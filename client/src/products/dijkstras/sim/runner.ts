import { computed } from "vue";
import type { Graph } from "@graph/types";
import { useGTextTip } from "@ui/useGTextTip";
import type { SimulationRunner } from "@ui/product/sim/types";
import { useSimulationControls } from "@ui/product/sim/useSimulationControls";
import { useDijkstra } from "../algo/useDijkstra";
import type { DijkstrasTrace } from "../algo/useDijkstra";
import { useSimulationTheme } from "./theme";
import state from "../state";

const { startNode } = state

export type DijkstraSimulationRunner = SimulationRunner<DijkstrasTrace>;

export const useSimulationRunner = (graph: Graph): DijkstraSimulationRunner => {
  const { trace } = useDijkstra(graph)
  const lastStep = computed(() => trace.value.length - 1);
  const simControls = useSimulationControls(graph, trace, { lastStep });
  const { activate: theme, deactivate: untheme } = useSimulationTheme(graph, simControls);

  const start = async () => {
    await startNode.set(graph);
    if (startNode.isUndefined.value) return;

    simControls.start();
    theme();
  };

  const stop = () => {
    startNode.cancelSet();
    simControls.stop();
    untheme();
  };

  return {
    start,
    stop,
    simControls,
  };
}