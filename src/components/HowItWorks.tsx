import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'

const STEPS = [
  {
    number: '01',
    titleKey: 'how_1_title' as const,
    descKey:  'how_1_desc'  as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    number: '02',
    titleKey: 'how_2_title' as const,
    descKey:  'how_2_desc'  as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="14" height="10" rx="2"/>
        <path d="M17 7h2a2 2 0 012 2v3a2 2 0 01-2 2h-2"/>
        <rect x="5" y="16" width="4" height="4" rx="0.5"/>
        <path d="M6 14v2M8 14v2"/>
      </svg>
    ),
  },
  {
    number: '03',
    titleKey: 'how_3_title' as const,
    descKey:  'how_3_desc'  as const,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const { lang } = useLang()

  return (
    <section id="how" style={{
      background: '#ECEEE9',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <p style={{ fontSize: '11px', fontWeight: 600, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.7rem' }}>
          {lang === 'en' ? 'How it works' : 'Hogyan működik'}
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, letterSpacing: '-0.7px', textAlign: 'center', marginBottom: '0.9rem', color: '#1A1D1B' }}>
          {t('how_title', lang)}
        </h2>
        <p style={{ fontSize: '1rem', color: '#4A5250', textAlign: 'center', maxWidth: '540px', margin: '0 auto 3.5rem' }}>
          {t('how_sub', lang)}
        </p>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Connettore freccia tra gli step */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: 'absolute', top: '36px', right: '-12px', zIndex: 1,
                  display: 'flex', alignItems: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(29,158,117,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}

              <div style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '14px', padding: '2rem',
              }}>
                {/* Numero + icona */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(29,158,117,0.10)', border: '1px solid rgba(29,158,117,0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: 'rgba(29,158,117,0.20)', letterSpacing: '-1px', lineHeight: 1 }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1A1D1B', marginBottom: '0.5rem' }}>
                  {t(step.titleKey, lang)}
                </h3>
                <p style={{ fontSize: '13px', color: '#4A5250', lineHeight: 1.65 }}>
                  {t(step.descKey, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}