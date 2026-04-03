import { useState } from 'react'
import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'
import type { Lang } from '../lib/i18n'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'hu', label: 'HU' },
]

const NAV_LINKS = [
  { key: 'nav_features'   as const, href: '#features'   },
  { key: 'nav_how'        as const, href: '#how'         },
  { key: 'nav_industries' as const, href: '#industries'  },
  { key: 'nav_pricing'    as const, href: '#pricing'     },
  { key: 'nav_download'   as const, href: '#download'    },
]

export default function Nav() {
  const { lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem', height: '60px',
      background: 'rgba(247,248,246,0.92)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>

      {/* LOGO */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="14" fill="#D6EDE4"/>
          <rect x="10" y="10" width="44" height="44" rx="10" fill="#1D9E75"/>
          <rect x="18" y="19" width="28" height="5" rx="2.5" fill="#F0FAF6"/>
          <rect x="18" y="29" width="19" height="5" rx="2.5" fill="rgba(240,250,246,0.55)"/>
          <rect x="18" y="39" width="23" height="5" rx="2.5" fill="rgba(240,250,246,0.55)"/>
        </svg>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#1A1D1B', letterSpacing: '-0.2px' }}>
          HACC<span style={{ color: '#1D9E75' }}>Print</span>
        </span>
      </a>

      {/* LINKS — desktop */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_LINKS.map(link => (
          <li key={link.key}>
            
              href={link.href}
              style={{ color: '#4A5250', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1D9E75')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4A5250')}
            >
              {t(link.key, lang)}
            </a>
          </li>
        ))}
      </ul>

      {/* LANG SWITCHER */}
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        {LANGS.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            style={{
              padding: '4px 11px',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: lang === l.code ? '#1D9E75' : 'rgba(0,0,0,0.08)',
              background: lang === l.code ? '#1D9E75' : 'transparent',
              color: lang === l.code ? 'white' : '#8A9490',
              fontSize: '13px',
              fontFamily: 'inherit',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  )
}