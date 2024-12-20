import type { Graph } from "@graph/types";
import { useGraph } from "@graph/useGraph";
import type { BoundingBox, Coordinate } from "@shape/types";
import { getCtx } from "@utils/ctx";
import { onMounted, onUnmounted, ref } from "vue";
import { getEncapsulatedNodeBox } from "@graph/plugins/marquee/helpers";
import { products } from "@utils/product";
import type { GraphTemplate } from "./types";

export const createImageFromCanvasRegion = (
  canvas: HTMLCanvasElement,
  boundingBox: BoundingBox,
) => {
  const { at, width, height } = boundingBox;
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = getCtx(tempCanvas);

  tempCtx.drawImage(
    canvas,           // Source canvas
    at.x, at.y,       // Source start x, y
    width, height,    // Source width, height
    0, 0,             // Destination start x, y
    width, height     // Destination width, height
  );

  const dataURL = tempCanvas.toDataURL();

  tempCanvas.remove();

  return dataURL;
};

export const normalizeNodes = <T extends Coordinate>(nodes: T[]) => {
  const minX = Math.min(...nodes.map(node => node.x));
  const minY = Math.min(...nodes.map(node => node.y));

  nodes.forEach(node => {
    node.x -= minX;
    node.y -= minY;
  });
}

export const useProductThumbnails = (graph: Graph) => {
  const tempCanvas = ref(document.createElement("canvas"));
  tempCanvas.value.width = 5000;
  tempCanvas.value.height = 5000;
  const tempGraph = useGraph(tempCanvas);

  const productTemplates = ref<GraphTemplate[]>(
    products.flatMap((p) => p.templates ?? [])
  );

  const updateProductThumbnails = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1)); // needed to load initial canvas
    for (const product of productTemplates.value) {
      tempGraph.load(product.graphState);
      await new Promise((resolve) => setTimeout(resolve, 1)); // gives time to load in
      tempGraph.themeName.value = graph.themeName.value;
      const boundingBox = getEncapsulatedNodeBox(
        tempGraph.nodes.value,
        tempGraph
      );
      product.thumbnail = createImageFromCanvasRegion(
        tempCanvas.value,
        boundingBox
      );
    }
  };

  onMounted(() => {
    updateProductThumbnails();
    graph.subscribe("onThemeChange", updateProductThumbnails);
  });

  onUnmounted(() => {
    graph.unsubscribe("onThemeChange", updateProductThumbnails);
    tempCanvas.value.remove();
  });

  return {
    productTemplates,
  };
};
