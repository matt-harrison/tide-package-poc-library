<script lang="ts" setup>
  import TideButton from '@/components/TideButton.vue';

  import { CSS } from '@/types/css';

  console.log('app');
</script>

<template>
  <h1>TIDE App Demo</h1>
  <TideButton :class="[CSS.MB_1]" :id="1">Test</TideButton>
  <TideButton :class="[CSS.MB_1]" :id="2">Test</TideButton>
  <TideButton :class="[CSS.MB_1]" :id="3">Test</TideButton>
</template>

<style src="@/assets/css/utilities.css" />
