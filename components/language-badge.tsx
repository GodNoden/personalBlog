import type { Language } from '@/lib/i18n'

interface LanguageBadgeProps {
  language: Language
}

export function LanguageBadge({ language }: LanguageBadgeProps) {
  return (
    <span className="inline-flex items-center bg-foreground px-2 py-0.5 text-xs font-medium tracking-wider text-background">
      {language.toUpperCase()}
    </span>
  )
}
