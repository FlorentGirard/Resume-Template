<template>
  <div>
    <div class="technos">
      <img :src="`../../public/picture/technos/${logo}`" :alt="alt" class="technos__picture" />
    </div>
  
  </div>
</template>

<script setup lang="ts">
defineProps<{
  logo: string
  alt: string
}>()
</script>

<style scoped lang="scss">
.technos {
  width: 160px;
  height: 160px;
  margin: 0 33px;
  background-color: $secondaryColorYellow;
  border-radius: 30px;
  filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;

  &__picture {
    width: 120px;
  }
}
</style>
