<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ref } from 'vue'
import MyPresentation from './MyPresentation.vue'
import HeadSection from './HeadSection.vue'
import MainTechnos from './MainTechnos.vue'
import SectionResume from './SectionResume.vue'

const resume = ref<HTMLAnchorElement | null>(null)
const downloadPdf = async () => {
  if (resume.value) {
    const contentHeight = resume.value.scrollHeight
    const contentWidth = resume.value.scrollWidth
    const aspectRatio = contentWidth / contentHeight

    // A4 dimensions in pixels at 96 DPI
    const pageHeight = 841.89
    const pdfHeight = pageHeight * 2
    const pdfWidth = pageHeight * aspectRatio * 2

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [pdfWidth, pdfHeight]
    })

    const canvas = await html2canvas(resume.value, {
      scale: 1
    })

    const imgData = canvas.toDataURL('image/png')

    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

    pdf.save('CV.pdf')
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
    subtitle: 'Role at the company',
    description: 'A short Description',
    logo: 'compagny_1.svg',
    startDate: '2023',
    endDate: '2024',
    detail: [
      "Detail significant projects or initiatives you've led or contributed to, emphasizing the skills you utilized and the tangible outcomes or achievements resulting from your efforts.",
      "   Detail significant projects or initiatives you've led or contributed to, emphasizing the skills you utilized and the tangible outcomes or achievements resulting from your efforts."
    ]
  },
  {
    name: 'Company Name',
    subtitle: 'Role at the company',
    description: 'A short Description',
    logo: 'compagny_2.svg',
    startDate: '2023',
    endDate: '2024',
    detail: [
      "Detail significant projects or initiatives you've led or contributed to, emphasizing the skills you utilized and the tangible outcomes or achievements resulting from your efforts.",
      "   Detail significant projects or initiatives you've led or contributed to, emphasizing the skills you utilized and the tangible outcomes or achievements resulting from your efforts."
    ]
  },
  {
    name: 'Company Name',
    subtitle: 'Role at the company',
    description: 'A short Description',
    logo: 'compagny_3.svg',
    startDate: '2023',
    endDate: '2024',
    detail: [
      "Detail significant projects or initiatives you've led or contributed to, emphasizing the skills you utilized and the tangible outcomes or achievements resulting from your efforts.",
      "   Detail significant projects or initiatives you've led or contributed to, emphasizing the skills you utilized and the tangible outcomes or achievements resulting from your efforts."
    ]
  }
])

const formation = ref([
  {
    name: 'University 1',
    subtitle: 'Major of Studies',
    description:
      'Write concisely about your academic journey, focusing on how your studies have enhanced your professional skills and prepared you for your chosen career. Be sure to mention your degree, major, any minors, honors or awards you received, and how these specifically contributed to your development.',
    startDate: '2023',
    endDate: '2024'
  },
  {
    name: 'University 2',
    subtitle: 'Major of Studies',
    description:
      'Write concisely about your academic journey, focusing on how your studies have enhanced your professional skills and prepared you for your chosen career. Be sure to mention your degree, major, any minors, honors or awards you received, and how these specifically contributed to your development.',
    startDate: '2023',
    endDate: '2024'
  },
  {
    name: 'University 3',
    subtitle: 'Major of Studies',
    description:
      'Write concisely about your academic journey, focusing on how your studies have enhanced your professional skills and prepared you for your chosen career. Be sure to mention your degree, major, any minors, honors or awards you received, and how these specifically contributed to your development.',
    startDate: '2023',
    endDate: '2024'
  }
])
</script>
<template>
  <div>
    <button @click="downloadPdf" class="resume__button">Download CV</button>

    <div class="wrapper" ref="resume">
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
        <SectionResume
          v-for="item in experience"
          :key="item.name"
          :nameSection="item.name"
          :startDate="item.startDate"
          :endDate="item.endDate"
          :subtitle="item.subtitle"
          :description="item.description"
          :logo="item.logo"
          :detail="item.detail"
        />
        <HeadSection title="Formations" icon="education.svg" />
        <SectionResume
          v-for="item in formation"
          :key="item.name"
          :nameSection="item.name"
          :startDate="item.startDate"
          :endDate="item.endDate"
          :subtitle="item.subtitle"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>
<style coped lang="scss">
.wrapper {
  max-width: 1600px;
  height: auto;
  background-color: #fff;
  background: url(../../public/picture/Effects_Yellow.svg);
  background-repeat: no-repeat;
  margin: auto;
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
