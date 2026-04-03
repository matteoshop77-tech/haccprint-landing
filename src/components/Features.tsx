import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'

const FEATURES = [
  {
    titleKey: 'feat_1_title' as const,
    descKey:  'feat_1_desc'  as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="14" height="10" rx="2"/>
        <path d="M17 7h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/>
        <rect x="5" y="16" width="4" height="4" rx="0.5"/>
        <path d="M6 14v2M8 14v2"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat_2_title' as const,
    descKey:  'feat_2_desc'  as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat_3_title' as const,
    descKey:  'feat_3_desc'  as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat_4_title' as const,
    descKey:  'feat_4_desc'  as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat_5_title' as const,
    descKey:  'feat_5_desc'  as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    titleKey: 'feat_6_title' as const,
    descKey:  'feat_6_desc'  as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
]

export default function Features() {
  const { lang } = useLang()

  return (
    <section id="features" style={{
      padding: '6rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <p style={{ fontSize: '11px', fontWeight: 600, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.7rem' }}>
        {lang === 'en' ? 'Features' : 'Funkciók'}
      </p>
      <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, letterSpacing: '-0.7px', textAlign: 'center', marginBottom: '0.9rem', color: '#1A1D1B' }}>
        {t('feat_title', lang)}
      </h2>
      <p style={{ fontSize: '1rem', color: '#4A5250', textAlign: 'center', maxWidth: '540px', margin: '0 auto 3.5rem' }}>
        {t('feat_sub', lang)}
      </p>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {FEATURES.map((f, i) => (
          <div
            key={i}
            style={{
              background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '14px', padding: '1.75rem',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.16)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)')}
          >
            <div style={{
              width: '40px', height: '40px', borderRadius: '9px',
              background: 'rgba(29,158,117,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.1rem',
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '0.4rem', color: '#1A1D1B' }}>
              {t(f.titleKey, lang)}
            </h3>
            <p style={{ fontSize: '13px', color: '#4A5250', lineHeight: 1.65 }}>
              {t(f.descKey, lang)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}