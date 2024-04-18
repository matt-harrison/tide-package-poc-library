<script lang="ts" setup>
  import { CSS } from '../types/css';

  type Props = {
    id: number;
    isLarge?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    isLarge: false,
  });
</script>

<template>
  <button
    :class="[
      'tide-button',
      CSS.BORDER_GREEN,
      CSS.BG_GREEN,
      CSS.RADIUS_1OF4,
      props.isLarge ? CSS.P_1 : CSS.P_1OF2,
    ]"
  >
    <span>TIDE: </span>
    <slot />
    <span>&nbsp;{{ props.id }}</span>
  </button>
</template>

<style scoped>
</style>
