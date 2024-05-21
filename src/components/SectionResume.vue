<template>
  <div class="workExperience">
    <header class="workExperience__head">
      <!--  <img :src="`../../public/picture/compagny/${logo}`" alt="" /> -->
      <div class="workExperience__logo" v-if="logo">
        <img :src="`../../public/picture/compagny/${logo}`" alt="" />
      </div>

      <div>
        <div class="workExperience__flex">
          <h3 class="workExperience__title">{{ nameSection }}</h3>
          <div class="workExperience__date">
            <time :datetime="startDate">{{ startDate }}</time> -
            <time :datetime="endDate">{{ endDate }}</time>
          </div>
        </div>
        <h4 class="workExperience__subtitle">{{ subtitle }}</h4>
      </div>
    </header>
    <p class="workExperience__description">
      {{ description }}
    </p>
    <ul class="workExperience__detail">
      <li class="workExperience__list" v-for="item in detail" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  nameSection: string
  startDate: string
  endDate: string
  subtitle: string
  description: string
  logo?: string
  detail?: Array<string>
}>()
</script>

<style scoped lang="scss">
.workExperience {
  margin-bottom: $gutter * 7;
}

.workExperience__logo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba($secondaryColorYellow, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  filter: blur(1px);

  // background-color: aqua;
}
.workExperience__head {
  display: flex;
  margin-bottom: $gutter * 5;

  &--logo {
    transform: translateX(-15px);
  }
}

.workExperience__flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 980px;
}
.workExperience__title {
  font-size: 40px;
  font-weight: 600;
  color: #050607;
  margin-bottom: 12px;
}

.workExperience__subtitle {
  color: $colorAltYellow;
  font-size: 24px;
}

.workExperience__list {
  display: flex;
  margin-top: $gutter * 2;

  &::before {
    content: url(' ../../public/picture/effect/yellow/Bullet.svg ');
    padding-right: 20px;

    width: 28px; /* Width of the SVG */
    height: 28px; /* Height of the SVG */
  }
}

.workExperience__description {
  margin-bottom: $gutter * 2;
}

.workExperience__date {
  color: #656a7b;
  font-size: 24px;
  float: right;
}
</style>
