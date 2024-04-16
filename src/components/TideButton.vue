<script lang="ts" setup>
  import { CSS } from '@/types/css';

  type Props = {
    isRed?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    isRed: false,
  });
</script>

<template>
  <button
    :class="[
      'tide-button',
      props.isRed ? CSS.BG_RED : CSS.BG_YELLOW,
    ]"
  >
    <span>TIDE: </span>
    <slot />
  </button>
</template>

<style scoped>
  .tide-button {
    background: white;
    color: black;
    outline: none;
    border: 1px solid red;
  }
</style>
