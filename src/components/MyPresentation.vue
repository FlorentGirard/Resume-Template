<template>
  <div class="prsentation">
    <div class="presentation__container">
      <div class="presentation__avatar">
        <div class="presentation__border">
          <img
            :src="`../../public/picture/${avatar}`"
            alt="Photo Profil"
            class="presentation__avatar"
          />
        </div>
      </div>
      <div class="presentation__info">
        <h1 class="presentation__name">{{ name }}</h1>
        <h2 class="presentation__headline">{{ headline }}</h2>
        <h3 class="icon">
          <img src="../../public/picture/presentation/location.svg" class="icon__picture" alt="" />
          <span class="presentation__label">{{ localisation }}</span>
        </h3>
        <ul class="presentation__list">
          <li
            v-for="(item, index) in linkPresentation"
            :key="item.label"
            class="presentation__list--item"
          >
            <a :href="item.link" class="icon presentation__link">
              <img
                :src="`../../public/picture/presentation/yellow/${item.icon}`"
                class="icon__picture presentation__link--picture"
                alt=""
                v-if="index == 0"
              />

              <img
                :src="`../../public/picture/presentation/${item.icon}`"
                class="icon__picture presentation__link--picture"
                alt=""
                v-else
              />
              <span class="presentation__label">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="presentation__intro">{{ bio }}</p>
  </div>
</template>

<script setup lang="ts">
interface linkPresentationType {
  icon: string
  link: string
  label: string
}
defineProps<{
  name: string
  headline: string
  localisation: string
  linkPresentation: linkPresentationType[]
  bio: string
  avatar: string
}>()
</script>

<style scoped lang="scss">
.presentation {
  &__container {
    display: flex;
  }
  &__border {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 5px solid $secondaryColorYellow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  &__info {
    margin-left: $gutter * 8;
  }
  &__name {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: $gutter * 2;
  }

  &__headline {
    font-size: 32px;
    margin-bottom: $gutter * 2;
  }

  &__list {
    margin-top: $gutter * 3;
    margin-bottom: $gutter * 10.5;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px 80px;
  }

  &__label {
    font-size: 20px;
  }

  &__intro {
    font-size: $fontSize * 2.4;
  }
}
</style>
