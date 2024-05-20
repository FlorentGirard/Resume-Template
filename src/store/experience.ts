import { defineStore } from 'pinia'
export const useExperienceStore = defineStore('experience', {
  state: () => {
    return {
      experience: [
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
      ]
    }
  }
})
