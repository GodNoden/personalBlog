'use client'

import { useState, useMemo } from 'react'
import { useLanguage } from '@/lib/language-context'
import { getTranslation, type Language } from '@/lib/i18n'
import { getAllPosts, categories, type Category } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

const languages: { code: Language | 'all'; label: string }[] = [
  { code: 'all', label: 'All' },
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export default function ArchivePage() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import('@/lib/i18n').translations.en) => getTranslation(language, key)
  
  const [selectedLanguage, setSelectedLanguage] = useState<Language | 'all'>('all')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  
  const posts = getAllPosts()
  
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const languageMatch = selectedLanguage === 'all' || post.language === selectedLanguage
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory
      return languageMatch && categoryMatch
    })
  }, [posts, selectedLanguage, selectedCategory])
  
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-12">
        <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
          {t('allPosts')}
        </h1>
      </header>
      
      {/* Filters */}
      <div className="mb-12 space-y-6">
        {/* Language Filter */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t('filterByLanguage')}
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedLanguage === lang.code
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {lang.code === 'all' ? t('all') : lang.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Filter */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t('filterByCategory')}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              {t('all')}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Posts List */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No posts found matching your filters.
        </p>
      )}
    </div>
  )
}
