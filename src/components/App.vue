<script lang="ts" setup>
  import TideButton from '@/components/TideButton.vue';

  import { CSS } from '@/types/css';

  console.log('app');
</script>

<template>
  <h1>TIDE App Demo</h1>
  <TideButton :class="[CSS.MB_1]">Library</TideButton>
  <TideButton :is-red="true">Library</TideButton>
</template>

<style src="@/assets/css/utilities.css" />
