'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'
import { getTranslation, type Language } from '@/lib/i18n'

const languages: { code: Language; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export function Navigation() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const t = (key: keyof typeof import('@/lib/i18n').translations.en) => getTranslation(language, key)
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto max-w-4xl px-6 py-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-2xl tracking-tight text-foreground transition-colors hover:text-primary"
          >
            Pensamientos
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-6 sm:flex">
              <Link
                href="/about"
                className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                  pathname === '/about' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {t('about')}
              </Link>
              <Link
                href="/archive"
                className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                  pathname === '/archive' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {t('archive')}
              </Link>
            </div>
            
            <div className="flex items-center gap-1 border-l border-border pl-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1.5 text-xs font-medium tracking-wider transition-colors ${
                    language === lang.code
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile navigation */}
        <div className="mt-4 flex items-center gap-6 sm:hidden">
          <Link
            href="/about"
            className={`text-sm tracking-wide transition-colors hover:text-foreground ${
              pathname === '/about' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {t('about')}
          </Link>
          <Link
            href="/archive"
            className={`text-sm tracking-wide transition-colors hover:text-foreground ${
              pathname === '/archive' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {t('archive')}
          </Link>
        </div>
      </nav>
    </header>
  )
}
