<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ref } from 'vue'
import MyPresentation from './MyPresentation.vue'
import HeadSection from './HeadSection.vue'
import MainTechnos from './MainTechnos.vue'
import SectionResume from './SectionResume.vue'
import { usePresentationStore } from '@/store/presentation'
import { useTechnosStore } from '@/store/technos'
import { useExperienceStore } from '@/store/experience'
import { useFormationStore } from '@/store/formation'
import { useProjectPersoStore } from '@/store/projectPerso'

const presentationData = usePresentationStore()
const technosData = useTechnosStore()
const experienceData = useExperienceStore()
const formationData = useFormationStore()
const projectPersoData = useProjectPersoStore()

const resume = ref<HTMLAnchorElement | null>(null)

//TODO: refact and optimize size pdf actually 1.5 mo
const downloadPdf = async () => {
  if (resume.value) {
    const contentHeight = resume.value.scrollHeight
    const contentWidth = resume.value.scrollWidth
    const aspectRatio = contentWidth / contentHeight

    // Dimensions A4
    const pageWidth = 210

    // Calcul des dimensions du PDF basé sur le ratio d'aspect
    const pdfWidth = pageWidth
    const pdfHeight = pdfWidth / aspectRatio

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight]
    })

    // Capturer tout le contenu HTML avec html2canvas
    const canvas = await html2canvas(resume.value, {
      scale: 2 // Augmenter l'échelle pour une meilleure résolution
    })

    // Convertir le canvas en image JPEG pour le PDF
    const imgData = canvas.toDataURL('image/jpeg', 0.8)

    // Dimensions de l'image dans le PDF
    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Ajouter l'image capturée au PDF
    pdf.addImage(imgData, 'jpeg', 0, 0, imgWidth, imgHeight)

    // Ajouter les liens au PDF avec jsPDF
    const links = resume.value.querySelectorAll('a')
    links.forEach((link) => {
      const rect = link.getBoundingClientRect()
      console.log(rect)
      const left = rect.left + window.scrollX // Inclure le décalage horizontal
      const top = rect.top + window.scrollY // Inclure le décalage vertical
      const width = rect.width
      const height = rect.height

      // Convertir les dimensions HTML en unités PDF
      const x = (left * pdfWidth) / contentWidth
      const y = (top * pdfHeight) / contentHeight
      const linkWidth = (width * pdfWidth) / contentWidth
      const linkHeight = (height * pdfHeight) / contentHeight

      // Ajouter le lien au PDF avec jsPDF
      pdf.link(x, y, linkWidth, linkHeight, { url: link.href })
    })

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
          <a href="https://www.linkedin.com/mynetwork/grow/">Test</a>
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
        <HeadSection title="Projet perso" icon="people.svg">
          <SectionResume
            v-for="item in projectPersoData.projectPerso"
            :key="item.name"
            :nameSection="item.name"
            :subtitle="item.subtitle"
            :description="item.description"
            :link-front="item.linkFront"
            :link-back="item.linkBack"
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
