<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ref } from 'vue'
import MyPresentation from './MyPresentation.vue'

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
</script>
<template>
  <div>
    <button @click="downloadPdf" class="resume__button">Download CV</button>
    <div class="wrapper" ref="resume">
      <div class="decor">
        <div class="decor__svg">
          <div class="container">
            <MyPresentation />
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
  background-image: url(../../public/picture/gradient.svg);
  height: 1600px;
}

.decor__svg {
  background-image: url(../../public/picture/Flares.svg);
  width: 100%;
  height: 500px;
}

.container {
  max-width: 1050px;
  margin: auto;
  padding-top: 115px;
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
</style>
