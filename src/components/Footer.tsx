import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
      }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="22" height="22" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="14" fill="#D6EDE4"/>
            <rect x="10" y="10" width="44" height="44" rx="10" fill="#1D9E75"/>
            <rect x="18" y="19" width="28" height="5" rx="2.5" fill="#F0FAF6"/>
            <rect x="18" y="29" width="19" height="5" rx="2.5" fill="rgba(240,250,246,0.55)"/>
            <rect x="18" y="39" width="23" height="5" rx="2.5" fill="rgba(240,250,246,0.55)"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#1A1D1B' }}>
            HACC<span style={{ color: '#1D9E75' }}>Print</span>
          </span>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '12px', color: '#8A9490' }}>
          {t('footer_copy', lang)}
        </p>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { key: 'footer_privacy' as const, href: '#' },
            { key: 'footer_terms'   as const, href: '#' },
            { key: 'footer_contact' as const, href: '#' },
          ].map(link => (
            
              key={link.key}
              href={link.href}
              style={{ fontSize: '12px', color: '#8A9490', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4A5250')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8A9490')}
            >
              {t(link.key, lang)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}