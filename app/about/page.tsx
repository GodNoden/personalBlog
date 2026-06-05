'use client'

import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import('@/lib/i18n').translations.en) => getTranslation(language, key)
  
  const content = {
    es: {
      title: 'Sobre mí',
      intro: 'Bienvenido a mi rincón de pensamientos.',
      body: [
        'Escribo porque necesito pensar, y pienso porque necesito escribir. Este blog es un espacio para reflexiones lentas en un mundo que se mueve demasiado rápido.',
        'Aquí encontrarás ensayos sobre filosofía, notas sobre literatura, y fragmentos de vida cotidiana. Escribo en español, inglés y francés — cada idioma ofrece una forma diferente de ver el mundo.',
        'No busco la perfección ni la productividad. Busco la claridad, la honestidad, y esos raros momentos en que las palabras logran capturar algo verdadero.',
        'Gracias por leer. Gracias por tomarte el tiempo.',
      ],
    },
    en: {
      title: 'About',
      intro: 'Welcome to my corner of thoughts.',
      body: [
        'I write because I need to think, and I think because I need to write. This blog is a space for slow reflections in a world that moves too fast.',
        'Here you will find essays on philosophy, notes on literature, and fragments of everyday life. I write in Spanish, English, and French — each language offers a different way of seeing the world.',
        'I do not seek perfection or productivity. I seek clarity, honesty, and those rare moments when words manage to capture something true.',
        'Thank you for reading. Thank you for taking the time.',
      ],
    },
    fr: {
      title: 'À propos',
      intro: 'Bienvenue dans mon coin de pensées.',
      body: [
        "J'écris parce que j'ai besoin de penser, et je pense parce que j'ai besoin d'écrire. Ce blog est un espace pour des réflexions lentes dans un monde qui va trop vite.",
        "Vous trouverez ici des essais sur la philosophie, des notes sur la littérature, et des fragments de la vie quotidienne. J'écris en espagnol, en anglais et en français — chaque langue offre une façon différente de voir le monde.",
        "Je ne cherche pas la perfection ni la productivité. Je cherche la clarté, l'honnêteté, et ces rares moments où les mots parviennent à capturer quelque chose de vrai.",
        "Merci de me lire. Merci de prendre le temps.",
      ],
    },
  }
  
  const currentContent = content[language]
  
  return (
    <div className="mx-auto max-w-[680px] px-6 py-12">
      <header className="mb-12">
        <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
          {currentContent.title}
        </h1>
        <p className="mt-4 font-serif text-xl italic text-muted-foreground">
          {currentContent.intro}
        </p>
      </header>
      
      <div className="prose-literary space-y-6">
        {currentContent.body.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Author signature */}
      <div className="mt-16 border-t border-border pt-8">
        <p className="font-serif text-lg italic text-muted-foreground">
          — The Author
        </p>
      </div>
    </div>
  )
}
