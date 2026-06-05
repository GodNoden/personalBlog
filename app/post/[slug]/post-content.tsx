'use client'

import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { LanguageBadge } from '@/components/language-badge'
import { AdBanner } from '@/components/ad-banner'
import { useLanguage } from '@/lib/language-context'
import { getTranslation } from '@/lib/i18n'

interface PostContentProps {
  post: Post
}

export function PostContent({ post }: PostContentProps) {
  const { language } = useLanguage()
  const t = (key: keyof typeof import('@/lib/i18n').translations.en) => getTranslation(language, key)
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  
  return (
    <article className="mx-auto max-w-[680px] px-6 py-12">
      {/* Top Ad Banner */}
      {/* <!-- Google AdSense Banner --> */}
      <div className="mb-12">
        <AdBanner type="rectangle" />
      </div>
      
      {/* Post Header */}
      <header className="mb-12">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <LanguageBadge language={post.language} />
          <span className="text-sm text-muted-foreground">{formattedDate}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">
            {post.readTime} {t('minRead')}
          </span>
        </div>
        
        <h1 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        
        <p className="mt-6 text-sm text-muted-foreground">
          {post.author}
        </p>
      </header>
      
      {/* Post Content */}
      <div className="prose-literary">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      {/* Bottom Ad Banner */}
      {/* <!-- Google AdSense Banner --> */}
      <div className="mt-16 border-t border-border pt-12">
        <AdBanner type="rectangle" />
      </div>
      
      {/* Back Link */}
      <div className="mt-12 border-t border-border pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          {t('home')}
        </Link>
      </div>
    </article>
  )
}
