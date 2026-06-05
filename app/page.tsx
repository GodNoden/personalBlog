'use client'

import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'
import { getFeaturedPost, getRecentPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import { AdBanner } from '@/components/ad-banner'

export default function HomePage() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import('@/lib/i18n').translations.en) => getTranslation(language, key)
  
  const featuredPost = getFeaturedPost()
  const recentPosts = getRecentPosts(featuredPost?.slug)
  
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Ad Banner - Leaderboard */}
      <div className="py-6">
        <AdBanner type="leaderboard" />
      </div>
      
      {/* Hero */}
      <section className="border-b border-border pb-16 pt-8">
        <h1 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          Pensamientos
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          {t('tagline')}
        </p>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="border-b border-border py-16">
          <p className="mb-8 text-xs font-medium uppercase tracking-widest text-primary">
            {t('featuredPost')}
          </p>
          <PostCard post={featuredPost} featured />
        </section>
      )}
      
      {/* Recent Posts Grid */}
      <section className="py-16">
        <p className="mb-10 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {t('recentPosts')}
        </p>
        
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
