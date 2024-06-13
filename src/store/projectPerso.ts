import { defineStore } from 'pinia'
export const useProjectPersoStore = defineStore('projectPerso', {
  state: () => {
    return {
      projectPerso: [
        {
          name: 'Project 1 ',
          subtitle: 'Projet en cours ',
          description: 'A simple description',
          linkFront: 'https://github.com/',
          linkBack: ''
        },
        {
          name: 'Project 2',
          subtitle: 'V1.0.0',
          description: ' A simple description',
          linkFront: 'https://github.com/',
          linkBack: ' https://github.com/'
        },
        {
          name: 'Project3',
          subtitle: 'Idée de project',
          description: 'a simple description',
          linkFront: 'https://github.com/',
          linkBack: ''
        }
      ]
    }
  }
})
