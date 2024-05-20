<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ref } from 'vue'
import MyPresentation from './MyPresentation.vue'
import HeadSection from './HeadSection.vue'
import MainTechnos from './MainTechnos.vue'
import SectionResume from './SectionResume.vue'
import { PhGraduationCap, PhBuilding, PhPen } from '@phosphor-icons/vue'
import { usePresentationStore } from '@/store/presentation'
import { useTechnosStore } from '@/store/technos'
import { useExperienceStore } from '@/store/experience'
import { useFormationStore } from '@/store/formation'

const presentationData = usePresentationStore()
const technosData = useTechnosStore()
const experienceData = useExperienceStore()
const formationData = useFormationStore()

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
</script>
<template>
  <div>
    <button @click="downloadPdf" class="resume__button">Download CV</button>

    <div class="wrapper" ref="resume">
      <div class="container">
        <MyPresentation
          :name="presentationData.name"
          :headline="presentationData.headlinePresentation"
          :localisation="presentationData.localisation"
          :linkPresentation="presentationData.linkPresentation"
          :bio="presentationData.bio"
          :avatar="presentationData.avatar"
        />
        <HeadSection title="Technos" icon="technos.svg">
          <div class="myResume__mainTechnos">
            <MainTechnos
              v-for="techno in technosData.mainTechnos"
              :key="techno.alt"
              :logo="techno.logo"
              :alt="techno.alt"
            />
          </div>
          <ul class="myResume__skill">
            <li v-for="skill in technosData.skills" :key="skill" class="myResume__skill-item">
              {{ skill }}
            </li>
          </ul>
        </HeadSection>

        <HeadSection title="Expériences" icon="work.svg">
          <SectionResume
            v-for="item in experienceData.experience"
            :key="item.name"
            :nameSection="item.name"
            :startDate="item.startDate"
            :endDate="item.endDate"
            :subtitle="item.subtitle"
            :description="item.description"
            :logo="item.logo"
            :detail="item.detail"
          />
        </HeadSection>

        <HeadSection title="Formations" icon="education.svg">
          <SectionResume
            v-for="item in formationData.formation"
            :key="item.name"
            :nameSection="item.name"
            :startDate="item.startDate"
            :endDate="item.endDate"
            :subtitle="item.subtitle"
            :description="item.description"
          />
        </HeadSection>
      </div>
    </div>
  </div>
</template>
<style coped lang="scss">
.wrapper {
  max-width: 1600px;
  height: auto;
  background-color: #fff;
  background: url(../../public/picture/effect/yellow/Effects_Yellow.svg);
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
  font-size: 12px;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 50px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 25px;
  height: 10px;
  background-color: rgba($colorSkillYellow, 0.8);
  margin: 5px;
}
</style>
