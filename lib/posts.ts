import type { Language } from './i18n'

export type Category = 'Philosophy' | 'Literature' | 'Personal' | 'Travel' | 'Other'

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  language: Language
  category: Category
  readTime: number
  author: string
  featured?: boolean
}

export const posts: Post[] = [
  {
    slug: 'la-belleza-de-lo-efimero',
    title: 'La belleza de lo efímero',
    excerpt: 'Hay algo profundamente conmovedor en las cosas que no duran. Los cerezos en flor, las puestas de sol, los momentos de perfecta conexión humana — su transitoriedad es precisamente lo que los hace preciosos.',
    content: `Hay algo profundamente conmovedor en las cosas que no duran. Los cerezos en flor, las puestas de sol, los momentos de perfecta conexión humana — su transitoriedad es precisamente lo que los hace preciosos.

Los japoneses tienen una palabra para esto: mono no aware, la patética de las cosas. No es melancolía exactamente, sino una sensibilidad agridulce hacia la impermanencia de todas las cosas. Es el suspiro que escapa cuando el último pétalo cae, cuando el tren se aleja de la estación, cuando termina una conversación que nunca volverá a repetirse exactamente igual.

He estado pensando mucho en esto últimamente. Vivimos en una cultura obsesionada con la permanencia — construimos monumentos, archivamos cada momento digital, luchamos contra el envejecimiento como si fuera un enemigo a derrotar. Pero quizás estamos perdiendo algo esencial en esta batalla.

La impermanencia no es el enemigo de la belleza; es su fuente.

Un diamante es hermoso, sí, pero su belleza es fría, estática, indiferente al tiempo. Una flor silvestre al borde del camino, que mañana ya no estará, tiene una belleza que nos habla directamente al corazón. Nos recuerda que nosotros también somos efímeros, que este momento — este preciso instante — nunca volverá.

Y eso, paradójicamente, es lo que lo hace infinitamente valioso.`,
    date: '2024-03-15',
    language: 'es',
    category: 'Philosophy',
    readTime: 4,
    author: 'El Autor',
    featured: true,
  },
  {
    slug: 'morning-pages',
    title: 'On morning pages and the discipline of thought',
    excerpt: 'Every morning, before the world wakes, I sit with my coffee and a blank page. Not to write anything important — precisely the opposite. To write without purpose, without audience, without judgment.',
    content: `Every morning, before the world wakes, I sit with my coffee and a blank page. Not to write anything important — precisely the opposite. To write without purpose, without audience, without judgment.

Julia Cameron calls them "morning pages" — three pages of longhand, stream-of-consciousness writing done first thing in the morning. I have been doing them for two years now, and they have changed the way I think.

The first few months were difficult. I would sit there, pen hovering, mind blank, feeling like a fraud. What could I possibly have to say? Who was I to claim the attention of even a blank page?

But that is precisely the point.

Morning pages are not about having something to say. They are about creating a space where thoughts can surface. Where the mind can empty itself of its endless chatter, its anxieties, its to-do lists. Where, in the silence that follows the noise, something quieter and truer might speak.

I write about my dreams, my fears, my grocery lists. I complain about the weather, about my neighbor's dog, about the state of the world. I write the same thoughts over and over until they bore me enough to move on. I write about nothing until, suddenly, I find myself writing about something.

The discipline is not in what I write, but that I write. Every single morning, without exception. Rain or shine, inspired or empty. The page does not care about my excuses.

And in that consistency, something magical happens. The well that seemed dry begins to fill. The thoughts that seemed trivial reveal unexpected depths. The practice becomes not a burden but a gift — a daily appointment with myself that I have come to treasure.`,
    date: '2024-03-10',
    language: 'en',
    category: 'Personal',
    readTime: 5,
    author: 'The Author',
  },
  {
    slug: 'lart-de-la-flanerie',
    title: "L'art de la flânerie",
    excerpt: "Paris m'a appris quelque chose que j'avais oublié : l'art de marcher sans destination. De se perdre volontairement dans les rues, de suivre une lumière intéressante, une odeur de pain frais, le son d'un piano derrière une fenêtre ouverte.",
    content: `Paris m'a appris quelque chose que j'avais oublié : l'art de marcher sans destination. De se perdre volontairement dans les rues, de suivre une lumière intéressante, une odeur de pain frais, le son d'un piano derrière une fenêtre ouverte.

Les Français ont un mot pour cela : flâner. Ce n'est pas simplement marcher, ni se promener. C'est un art de vivre, une philosophie du mouvement sans but, de l'observation sans jugement, de la présence sans intention.

Baudelaire parlait du flâneur comme d'un "botaniste du bitume" — quelqu'un qui étudie la ville comme un naturaliste étudie la forêt. Mais je préfère penser au flâneur comme à un poète sans plume, quelqu'un qui compose des vers avec ses pas, qui trouve des métaphores dans les reflets des vitrines, qui découvre des histoires dans les visages des passants.

J'ai passé une semaine à Paris sans plan, sans carte, sans horaire. Chaque matin, je sortais de mon petit hôtel dans le Marais et je me laissais porter par la ville. Un café ici, une librairie là. Une conversation avec un inconnu sur un banc. Une heure passée à regarder la Seine couler sous le Pont des Arts.

Ce que j'ai découvert, c'est que la flânerie n'est pas une perte de temps — c'est une façon différente de vivre le temps. Non pas comme une ressource à optimiser, mais comme un fleuve dans lequel on peut se plonger, se laisser porter, parfois s'arrêter pour observer un détail que la hâte nous aurait fait manquer.

Dans notre monde d'efficacité et de productivité, il y a quelque chose de révolutionnaire dans l'acte de marcher sans but. C'est un refus silencieux de la tyrannie de l'utilité. C'est une affirmation que la vie ne se résume pas à ce que nous accomplissons, mais aussi à ce que nous remarquons, ce que nous savourons, ce que nous laissons nous toucher.`,
    date: '2024-03-05',
    language: 'fr',
    category: 'Literature',
    readTime: 6,
    author: "L'Auteur",
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getFeaturedPost(): Post | undefined {
  return posts.find(post => post.featured) || posts[0]
}

export function getRecentPosts(exclude?: string): Post[] {
  return posts.filter(post => post.slug !== exclude).slice(0, 4)
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByLanguage(language: Language): Post[] {
  return posts.filter(post => post.language === language)
}

export function getPostsByCategory(category: Category): Post[] {
  return posts.filter(post => post.category === category)
}

export const categories: Category[] = ['Philosophy', 'Literature', 'Personal', 'Travel', 'Other']
