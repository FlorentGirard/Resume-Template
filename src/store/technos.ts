import { defineStore } from 'pinia'
export const useTechnosStore = defineStore('technos', {
  state: () => {
    return {
      mainTechnos: [
        { logo: 'vue.png', alt: 'VueJs' },
        { logo: 'react.png', alt: 'ReactJs' },
        { logo: 'nodejs.png', alt: 'NodeJs' },
        { logo: 'nestjs.png', alt: 'NestJs' }
      ],
      skills: [
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
      ]
    }
  }
})
