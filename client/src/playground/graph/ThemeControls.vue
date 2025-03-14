<script setup lang="ts">
  import type { Graph } from '@graph/types';
  import InputColor from '@ui/InputColor.vue';
  import InputRange from '@ui/InputRange.vue';
  import InputText from '@ui/InputText.vue';
  import { camelCaseToTitleCase } from '@utils/string';
  import { THEMES, type GraphThemeName } from '@graph/themes';
  import CButton from '@ui/core/button/Button.vue';
  import { useTheme } from '@graph/themes/useTheme';
  import { ref, watch } from 'vue';

  const props = defineProps<{
    graph: Graph;
  }>();

  const { setTheme } = useTheme(props.graph, 'playground-theme-controls');

  const themes = ref(THEMES[props.graph.themeName.value]);

  const adjustThemes = () => {
    const themeEntries = Object.entries(themes.value);
    for (const [key, value] of themeEntries) {
      // @ts-expect-error imprecise typing when using Object.entries
      setTheme(key, value);
    }
  };

  const setThemeName = (newThemeName: GraphThemeName) => {
    const { themeName } = props.graph;
    themeName.value = newThemeName;
  };

  watch(themes, adjustThemes, { deep: true });
</script>

<template>
  <div class="px-4 my-2">
    <div>
      <h2 class="text-2xl font-bold text-white">Theme Controls</h2>
    </div>
    <div class="my-2">
      <div class="mb-2">
        <h1 class="text-xl font-bold text-white">Presets</h1>
      </div>
      <div class="flex flex-wrap gap-3">
        <div
          v-for="(_, themeName) in THEMES"
          :key="themeName"
          @click="setThemeName(themeName)"
        >
          <CButton style="width: 120px; text-align: center">
            {{ camelCaseToTitleCase(themeName) }}
          </CButton>
        </div>
      </div>
    </div>
    <div
      v-for="(theme, themeKey) in THEMES[graph.themeName.value]"
      :key="themeKey"
      class="my-2"
    >
      <div class="text-white mb-2">
        <h3 class="font-bold text-lg">
          {{ camelCaseToTitleCase(themeKey) }}
        </h3>

        <h4 class="text-md">
          {{ theme }}
        </h4>
      </div>

      <InputColor
        v-if="
          typeof theme === 'string' && themeKey.toLowerCase().includes('color')
        "
        v-model="themes[themeKey] as string"
        style="width: 100px; height: 30px"
      />

      <InputText
        v-else-if="typeof theme === 'string'"
        v-model="themes[themeKey] as string"
      />

      <InputRange
        v-else-if="typeof theme === 'number'"
        v-model="themes[themeKey] as number"
        style="width: 100%"
        :min="0"
        :max="100"
      />

      <h5
        v-else
        class="text-red-500 font-bold"
      >
        Not Supported
      </h5>
    </div>
  </div>
</template>
