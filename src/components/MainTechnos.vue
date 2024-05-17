<template>
  <!--  <div class="technos">
    <span class="technos__name">{{ name }}</span>
  </div> -->
  <div>
    <!-- <img src="../../public/picture/logo.png" alt="" class="test" /> -->
    <div class="technos">
      <img :src="`../../public/picture/technos/${picture}`" alt="" class="technos__picture" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  picture: String
}>()
</script>

<style scoped lang="scss">
.technos {
  width: 160px;
  height: 160px;
  margin: 0 33px;
  background-color: rgba(#dedfe3, 1);
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
