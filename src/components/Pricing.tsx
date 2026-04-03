import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'
import { DOWNLOAD_URL } from '../lib/constants'

const STARTER_FEATURES = [
  'price_f1', 'price_f2', 'price_f3', 'price_f4', 'price_f5',
] as const

const PRO_FEATURES = [
  'price_f6', 'price_f2', 'price_f3', 'price_f4', 'price_f7', 'price_f8',
] as const

function CheckIcon() {
  return (
    <div style={{
      width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
      background: 'rgba(29,158,117,0.10)', border: '1px solid rgba(29,158,117,0.25)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 5" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default function Pricing() {
  const { lang } = useLang()

  return (
    <section id="pricing" style={{
      background: '#ECEEE9',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <p style={{ fontSize: '11px', fontWeight: 600, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.7rem' }}>
          {lang === 'en' ? 'Pricing' : 'Árak'}
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, letterSpacing: '-0.7px', textAlign: 'center', marginBottom: '0.9rem', color: '#1A1D1B' }}>
          {t('price_title', lang)}
        </h2>
        <p style={{ fontSize: '1rem', color: '#4A5250', textAlign: 'center', maxWidth: '540px', margin: '0 auto 3.5rem' }}>
          {t('price_sub', lang)}
        </p>

        {/* Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem', maxWidth: '840px', margin: '0 auto',
        }}>

          {/* STARTER */}
          <div style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '18px', padding: '2.25rem',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#4A5250', marginBottom: '0.5rem' }}>
              {t('price_starter', lang)}
            </div>
            <div style={{ fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-2px', color: '#1A1D1B', marginBottom: '0.2rem', lineHeight: 1 }}>
              €9<span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#4A5250', letterSpacing: 0 }}>{t('price_mo', lang)}</span>
            </div>
            <p style={{ fontSize: '13px', color: '#4A5250', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              {t('price_starter_desc', lang)}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {STARTER_FEATURES.map(key => (
                <li key={key} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px', color: '#1A1D1B' }}>
                  <CheckIcon />
                  {t(key, lang)}
                </li>
              ))}
            </ul>
            <a
              href={DOWNLOAD_URL}
              style={{
                display: 'block', textAlign: 'center',
                padding: '11px', borderRadius: '10px',
                border: '1px solid rgba(0,0,0,0.12)',
                color: '#4A5250', fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.color = '#1D9E75' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.color = '#4A5250' }}
            >
              {lang === 'en' ? 'Start free trial' : 'Ingyenes próba indítása'}
            </a>
          </div>

          {/* PROFESSIONAL */}
          <div style={{
            background: '#FFFFFF', border: '2px solid #1D9E75',
            borderRadius: '18px', padding: '2.25rem', position: 'relative',
          }}>
            {/* Badge */}
            <div style={{
              position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
              background: '#1D9E75', color: 'white', fontSize: '10px', fontWeight: 700,
              padding: '4px 14px', borderRadius: '0 0 8px 8px', letterSpacing: '0.3px',
              whiteSpace: 'nowrap',
            }}>
              {t('price_popular', lang)}
            </div>

            <div style={{ fontSize: '12px', fontWeight: 600, color: '#4A5250', marginBottom: '0.5rem', marginTop: '1rem' }}>
              {t('price_pro', lang)}
            </div>
            <div style={{ fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-2px', color: '#1A1D1B', marginBottom: '0.2rem', lineHeight: 1 }}>
              €19<span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#4A5250', letterSpacing: 0 }}>{t('price_mo', lang)}</span>
            </div>
            <p style={{ fontSize: '13px', color: '#4A5250', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              {t('price_pro_desc', lang)}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {PRO_FEATURES.map(key => (
                <li key={key} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px', color: '#1A1D1B' }}>
                  <CheckIcon />
                  {t(key, lang)}
                </li>
              ))}
            </ul>
            <a
              href={DOWNLOAD_URL}
              style={{
                display: 'block', textAlign: 'center',
                padding: '11px', borderRadius: '10px',
                background: '#1D9E75', color: 'white',
                fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F7A5A' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1D9E75' }}
            >
              {lang === 'en' ? 'Start free trial' : 'Ingyenes próba indítása'}
            </a>
          </div>
        </div>

        {/* Nota */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#8A9490', marginTop: '1.5rem' }}>
          {t('price_note', lang)}
        </p>
      </div>
    </section>
  )
}