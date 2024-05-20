<template>
  <div>
    <h3 class="head">
      <img :src="`../../public/picture/sectionResume/yellow/${icon}`" />
      <span class="head__title">{{ title }}</span>
    </h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
}>()
</script>

<style scoped lang="scss">
.head {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #9196a5;
  padding-bottom: $gutter * 3;
  margin: 115px 0 66px 0;

  &__title {
    font-size: 48px;
    font-weight: 600;
  }
}
</style>
