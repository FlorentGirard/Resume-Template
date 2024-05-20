import { defineStore } from 'pinia'
export const usePresentationStore = defineStore('dataResume', {
  state: () => {
    return {
      name: 'Your Name',
      avatar: 'avatar.png',
      headlinePresentation: 'A short but captivating headline',
      localisation: 'France',
      linkPresentation: [
        {
          icon: 'email.svg',
          link: '#',
          label: 'Email'
        },
        { icon: 'linkedin.svg', link: '#', label: 'Linkedin' },
        { icon: 'github.svg', link: '#', label: 'Github' },
        { icon: 'internet.svg', link: '#', label: 'MyWebsite' }
      ],
      bio: "Write a short introduction for your CV, start with your job title or main skill, followed by your key achievements or experiences, and then your career goals. Make sure it's concise, typically 2-3 sentences, and tailored to the role you're applying for, highlighting how your skills and experiences make you a perfect fit for the position."
    }
  }
})
