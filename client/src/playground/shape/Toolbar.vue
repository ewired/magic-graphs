<script setup lang="ts">
  import { computed, toRefs } from 'vue';
  import type { Shape } from '@shape/types';
  import { useHeatmap } from '@playground/shape/useHeatmap';
  import Button from '@ui/core/button/Button.vue';
  import InputRange from '@ui/InputRange.vue';
  import { getCtx } from '@utils/ctx';

  const props = defineProps<{
    canvas: HTMLCanvasElement | undefined;
    items: Shape[];
    draw: () => void;
  }>();

  const { items, canvas } = toRefs(props);

  const {
    heatmapActive,
    heatmapOpacity,
    heatmapResolution,
    toggleHeatmapMode,
    heatmapMode,
  } = useHeatmap(canvas, items);

  const heatmapBtnText = computed(() =>
    heatmapActive.value ? 'Hide Heatmap' : 'Show Heatmap',
  );

  const toggleHeatmapModeButtonText = computed(() =>
    heatmapMode.value === 'efficient' ? 'Precise Heatmap' : 'Efficient Heatmap',
  );

  const fn = () => {
    const ctx = getCtx(canvas);
    items.value[2].activateTextArea?.(ctx, (str) => {
      console.log('value', str);
    });
  };
</script>

<template>
  <Button @click="draw">Redraw</Button>

  <Button @click="heatmapActive = !heatmapActive">
    {{ heatmapBtnText }}
  </Button>

  <Button
    v-if="heatmapActive"
    @click="toggleHeatmapMode"
  >
    {{ toggleHeatmapModeButtonText }}
  </Button>

  <Button @click="fn">Micro Control</Button>

  <div
    v-if="heatmapActive"
    class="flex items-center gap-3 text-white h-6 mt-1 text-sm font-bold"
  >
    <div>
      <p>Opacity {{ heatmapOpacity }}</p>

      <InputRange
        v-model.number="heatmapOpacity"
        min="0"
        max="100"
      />
    </div>

    <div>
      <p>Resolution {{ heatmapResolution }}</p>

      <InputRange
        v-model.number="heatmapResolution"
        min="1"
        max="10"
      />
    </div>
  </div>
</template>
