<template>
  <div class="workExperience">
    <header class="workExperience__head">
      <img :src="`../../public/picture/compagny/${logo}`" alt="" class="test" />
      <div>
        <div class="workExperience__flex">
          <h3 class="workExperience__title">{{ nameCompagny }}</h3>
          <div class="workExperience__date">
            <time :datetime="startDateWork">{{ startDateWork }}</time> -
            <time :datetime="endDateWork">{{ endDateWork }}</time>
          </div>
        </div>
        <h4 class="workExperience__subtitle">{{ roleCompagny }}</h4>
      </div>
    </header>
    <p>
      {{ description }}
    </p>
    <ul class="workExperience__detail">
      <li class="workExperience__list">
        Detail significant projects or initiatives you've led or contributed to, emphasizing the
        skills you utilized and the tangible outcomes or achievements resulting from your efforts.
      </li>
      <li class="workExperience__list">
        Detail significant projects or initiatives you've led or contributed to, emphasizing the
        skills you utilized and the tangible outcomes or achievements resulting from your efforts.
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  nameCompagny: string
  startDateWork: string
  endDateWork: string
  roleCompagny: string
  description: string
  logo: string
}>()
</script>

<style scoped lang="scss">
.workExperience {
  margin-bottom: $gutter * 7;
}
.workExperience__head {
  display: flex;
  margin-bottom: $gutter * 5;
  transform: translateX(-15px);
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
  color: $colorAlt;
  font-size: 24px;
}

.workExperience__list {
  display: flex;
  margin-top: $gutter * 2;

  &::before {
    content: url(' ../../public/picture/Bullet.svg ');
    padding-right: 20px;

    width: 28px; /* Width of the SVG */
    height: 28px; /* Height of the SVG */
  }
}

.workExperience__date {
  color: #656a7b;
  font-size: 24px;
  float: right;
}
</style>
