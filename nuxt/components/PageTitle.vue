<script setup lang="ts">
const props = defineProps<{
  noPaddingBottom?: boolean;
}>();
</script>

<template>
  <h1
    class="page-title"
    :class="{
      'no-padding-bottom': props.noPaddingBottom,
    }"
  >
    <slot />
  </h1>
</template>

<style scoped lang="scss">
.page-title {
  padding-bottom: 35px;

  &.no-padding-bottom {
    padding-bottom: 0;
  }
}
</style>
