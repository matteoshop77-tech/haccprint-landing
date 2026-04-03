import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'

const INDUSTRIES = [
  {
    emoji: '🍽️',
    nameKey: 'ind_1_name' as const,
    descKey: 'ind_1_desc' as const,
  },
  {
    emoji: '🏨',
    nameKey: 'ind_2_name' as const,
    descKey: 'ind_2_desc' as const,
  },
  {
    emoji: '🥐',
    nameKey: 'ind_3_name' as const,
    descKey: 'ind_3_desc' as const,
  },
  {
    emoji: '💊',
    nameKey: 'ind_4_name' as const,
    descKey: 'ind_4_desc' as const,
  },
]

export default function Industries() {
  const { lang } = useLang()

  return (
    <section id="industries" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <p style={{ fontSize: '11px', fontWeight: 600, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.7rem' }}>
          {lang === 'en' ? 'Industries' : 'Iparágak'}
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, letterSpacing: '-0.7px', textAlign: 'center', marginBottom: '0.9rem', color: '#1A1D1B' }}>
          {t('ind_title', lang)}
        </h2>
        <p style={{ fontSize: '1rem', color: '#4A5250', textAlign: 'center', maxWidth: '540px', margin: '0 auto 3.5rem' }}>
          {t('ind_sub', lang)}
        </p>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '14px', padding: '2rem 1.5rem', textAlign: 'center',
                transition: 'all 0.15s', cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.16)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>
                {ind.emoji}
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1A1D1B', marginBottom: '0.4rem' }}>
                {t(ind.nameKey, lang)}
              </h3>
              <p style={{ fontSize: '13px', color: '#4A5250', lineHeight: 1.55 }}>
                {t(ind.descKey, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}