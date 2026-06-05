import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { LanguageBadge } from './language-badge'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  
  if (featured) {
    return (
      <article className="group">
        <Link href={`/post/${post.slug}`} className="block">
          <div className="mb-4 flex items-center gap-3">
            <LanguageBadge language={post.language} />
            <span className="text-xs tracking-wide text-muted-foreground">
              {formattedDate}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">
              {post.readTime} min
            </span>
          </div>
          
          <h2 className="font-serif text-3xl leading-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl md:text-5xl">
            {post.title}
          </h2>
          
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </Link>
      </article>
    )
  }
  
  return (
    <article className="group">
      <Link href={`/post/${post.slug}`} className="block">
        <div className="mb-3 flex items-center gap-3">
          <LanguageBadge language={post.language} />
          <span className="text-xs tracking-wide text-muted-foreground">
            {formattedDate}
          </span>
        </div>
        
        <h3 className="font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">
          {post.title}
        </h3>
        
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        
        <div className="mt-3 text-xs text-muted-foreground">
          {post.readTime} min
        </div>
      </Link>
    </article>
  )
}
