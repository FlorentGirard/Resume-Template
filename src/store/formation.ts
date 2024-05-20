import { defineStore } from 'pinia'
export const useFormationStore = defineStore('formation', {
  state: () => {
    return {
      formation: [
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
      ]
    }
  }
})
