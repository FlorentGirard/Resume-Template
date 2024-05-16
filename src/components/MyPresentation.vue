<template>
  <div class="prsentation">
    <div class="presentation__container">
      <div class="presentation__avatar">
        <div class="presentation__border">
          <div class="presentation__picture"></div>
        </div>
      </div>
      <div class="presentation__info">
        <h1 class="presentation__name">Your Name</h1>
        <h2 class="presentation__headline">A short but captivating headline</h2>
        <h3 class="icon">
          <img src="../../public/picture/presentation/location.svg" class="icon__picture" alt="" />
          <span class="presentation__label">Lille,Hauts de France</span>
        </h3>
        <ul class="presentation__list">
          <li v-for="item in linkPresentation" :key="item.label" class="presentation__list--item">
            <a :href="item.link" class="icon presentation__link">
              <img
                :src="`../../public/picture/presentation/${item.icon}`"
                class="icon__picture presentation__link--picture"
                alt=""
              />
              <span class="presentation__label">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="presentation__intro">
      Write a short introduction for your CV, start with your job title or main skill, followed by
      your key achievements or experiences, and then your career goals. Make sure it's concise,
      typically 2-3 sentences, and tailored to the role you're applying for, highlighting how your
      skills and experiences make you a perfect fit for the position.
    </p>
  </div>
</template>

<script setup lang="ts">
const linkPresentation = [
  {
    icon: 'email.svg',
    link: '#',
    label: 'Email'
  },
  { icon: 'linkedin.svg', link: '#', label: 'Linkedin' },
  { icon: 'github.svg', link: '#', label: 'Github' },
  { icon: 'internet.svg', link: '#', label: 'MyWebsite' }
]
</script>

<style scoped lang="scss">
.presentation {
  &__container {
    display: flex;
  }
  &__border {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 5px solid $secondaryColor;
    position: relative;
  }
  &__picture {
    width: 226px;
    height: 226px;
    border-radius: 50%;
    background-color: #d9d9d9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
