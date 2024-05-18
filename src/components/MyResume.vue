<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ref } from 'vue'
import MyPresentation from './MyPresentation.vue'
import HeadSection from './HeadSection.vue'
import MainTechnos from './MainTechnos.vue'
import WorkExperience from './WorkExperience.vue'

const resume = ref<HTMLAnchorElement | null>(null)

const downloadPdf = () => {
  if (resume.value) {
    const contentWidth = resume.value.offsetWidth
    const contentHeight = resume.value.offsetHeight
    console.log('largeur', contentWidth)
    console.log('hauteur', contentHeight)

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [contentWidth, contentHeight]
    })

    html2canvas(resume.value, {
      scale: 1,
      backgroundColor: null
    }).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png')

      const imgWidth = contentWidth // Largeur de la page A4 en mm
      const imgHeight = (contentHeight * imgWidth) / contentWidth

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

      pdf.save('document.pdf')
    })
  }
}

const technos = ref(['vue.png', 'react.png', 'nodejs.png', 'nestjs.png'])
const skills = ref([
  'AWS',
  'Docker',
  'React Native',
  'Pinia',
  'PostgresSQL',
  'MongoDB',
  'NuxtJs',
  'SASS',
  'Typescript',
  'APIRESET',
  'Jest',
  'Github',
  'Méthododologie Agile'
])
const experience = ref([
  {
    name: 'Company Name',
    post: 'Role at the company',
    description: 'A short Description',
    logo: 'compagny_1.svg',
    startDateWork: '2023',
    endDateWork: '2024'
  },
  {
    name: 'Company Name',
    post: 'Role at the company',
    description: 'A short Description',
    logo: 'compagny_2.svg',
    startDateWork: '2023',
    endDateWork: '2024'
  },
  {
    name: 'Company Name',
    post: 'Role at the company',
    description: 'A short Description',
    logo: 'compagny_3.svg',
    startDateWork: '2023',
    endDateWork: '2024'
  }
])
</script>
<template>
  <div>
    <button @click="downloadPdf" class="resume__button">Download CV</button>
    <div class="wrapper" ref="resume">
      <div class="decor">
        <div class="decor__svg">
          <div class="container">
            <MyPresentation />
            <HeadSection title="Technos" icon="technos.svg" />

            <div class="myResume__mainTechnos">
              <MainTechnos v-for="item in technos" :key="item" :picture="item" />
            </div>
            <ul class="myResume__skill">
              <li v-for="item in skills" :key="item" class="myResume__skill-item">{{ item }}</li>
            </ul>
            <HeadSection title="Expériences" icon="work.svg" />
            <WorkExperience
              v-for="item in experience"
              :key="item.name"
              :nameCompagny="item.name"
              :startDateWork="item.startDateWork"
              :endDateWork="item.endDateWork"
              :roleCompagny="item.post"
              :description="item.description"
              :logo="item.logo"
            />
            <HeadSection title="Formations" icon="education.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style coped lang="scss">
.wrapper {
  max-width: 1600px;
  height: auto;
  background-color: #fff;
  margin: auto;
}
.decor {
  // background-image: url(../../public/picture/gradient.svg);
  background-image: url(../../public/picture/Effects_Yellow.svg);
  height: 1600px;
}

.decor__svg {
  // background-image: url(../../public/picture/Flares.svg);
  width: 100%;
  height: 500px;
}

.container {
  max-width: 1050px;
  margin: auto;
  padding-top: 115px;
  padding-bottom: 100px;
}

.resume__button {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 250px;
  height: 100px;
  background-color: $mainColor;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.myResume__mainTechnos {
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
}

.myResume__skill {
  display: flex;
  flex-wrap: wrap;
}

.myResume__skill-item {
  display: inline-block;
  padding: 20px;
  border-radius: 25px;
  height: 10px;
  background-color: rgba(#f1d8bb, 0.8);
  margin: 5px;
}
</style>
