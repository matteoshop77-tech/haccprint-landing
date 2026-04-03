import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'
import { DOWNLOAD_URL } from '../lib/constants'

export default function Hero() {
  const { lang } = useLang()

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 2rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* glow sfondo */}
      <div style={{
        position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '600px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(29,158,117,0.08) 0%, transparent 65%)',
      }} />

      {/* BADGE */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.25)',
        color: '#0F7A5A', fontSize: '12px', fontWeight: 600,
        padding: '5px 14px', borderRadius: '20px', marginBottom: '2rem',
      }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#1D9E75', flexShrink: 0 }} />
        {t('hero_badge', lang)}
      </div>

      {/* HEADLINE */}
      <h1 style={{
        fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700,
        lineHeight: 1.1, letterSpacing: '-1.5px',
        maxWidth: '760px', marginBottom: '1.4rem', color: '#1A1D1B',
      }}>
        {t('hero_h1_a', lang)}{' '}
        <span style={{ color: '#1D9E75' }}>{t('hero_h1_b', lang)}</span>
        <br />
        {t('hero_h1_c', lang)}
      </h1>

      {/* SOTTOTITOLO */}
      <p style={{
        fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#4A5250',
        maxWidth: '540px', marginBottom: '2.5rem', fontWeight: 400,
      }}>
        {t('hero_sub', lang)}
      </p>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        
          href={DOWNLOAD_URL}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '9px',
            background: '#1D9E75', color: 'white',
            padding: '13px 26px', borderRadius: '10px',
            fontSize: '15px', fontWeight: 600, textDecoration: 'none',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0F7A5A'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1D9E75'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2v11M6 9l4 4 4-4M4 16h12"/>
          </svg>
          {t('hero_cta', lang)}
        </a>
        
          href="#how"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'transparent', color: '#4A5250',
            padding: '13px 22px', borderRadius: '10px',
            fontSize: '15px', fontWeight: 500, textDecoration: 'none',
            border: '1px solid rgba(0,0,0,0.08)', transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.16)'; e.currentTarget.style.color = '#1A1D1B' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#4A5250' }}
        >
          {t('hero_secondary', lang)}
        </a>
      </div>

      {/* NOTA TRIAL */}
      <p style={{ fontSize: '12px', color: '#8A9490', marginTop: '0.9rem' }}>
        {t('hero_note', lang)}
      </p>

      {/* APP MOCKUP */}
      <div style={{
        width: '100%', maxWidth: '920px', marginTop: '3.5rem',
        background: '#F4F6F3', borderRadius: '18px',
        border: '1px solid rgba(0,0,0,0.10)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden', position: 'relative', zIndex: 1,
      }}>
        {/* Titlebar */}
        <div style={{
          background: '#ECEEE9', height: '36px',
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: '8px',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27C93F' }} />
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#4A5250' }}>
            HACC<span style={{ color: '#1D9E75' }}>Print</span>
          </span>
          <div style={{ flex: 1 }} />
        </div>

        {/* Trial banner */}
        <div style={{
          background: '#FEFCE8', borderBottom: '1px solid #FEF08A',
          color: '#A16207', padding: '3px 14px',
          fontSize: '11px', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#A16207" strokeWidth="2" strokeLinecap="round">
            <path d="M8 2l.5 7h-1L8 2zM8 13a.75.75 0 110 1.5A.75.75 0 018 13z"/>
          </svg>
          {lang === 'en'
            ? <>Free trial: <strong style={{ marginLeft: '3px' }}>12 days remaining</strong> — <u style={{ marginLeft: '3px' }}>activate license</u></>
            : <>Ingyenes próba: <strong style={{ marginLeft: '3px' }}>12 nap maradt</strong> — <u style={{ marginLeft: '3px' }}>licenc aktiválása</u></>
          }
        </div>

        {/* App body */}
        <div style={{ display: 'flex', height: '420px' }}>

          {/* Sidebar */}
          <div style={{
            width: '64px', background: '#ECEEE9',
            borderRight: '1px solid rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', padding: '16px 0', gap: '4px', flexShrink: 0,
          }}>
            {/* Logo */}
            <div style={{ marginBottom: '14px' }}>
              <svg width="32" height="32" viewBox="0 0 64 64">
                <rect width="64" height="64" rx="14" fill="#D6EDE4"/>
                <rect x="10" y="10" width="44" height="44" rx="10" fill="#1D9E75"/>
                <rect x="18" y="19" width="28" height="5" rx="2.5" fill="#F0FAF6"/>
                <rect x="18" y="29" width="19" height="5" rx="2.5" fill="rgba(240,250,246,0.55)"/>
                <rect x="18" y="39" width="23" height="5" rx="2.5" fill="rgba(240,250,246,0.55)"/>
              </svg>
            </div>
            {/* Nav icons */}
            {[
              { active: true,  d: 'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z' },
              { active: false, d: 'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z' },
              { active: false, d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8' },
              { active: false, d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
            ].map((icon, i) => (
              <div key={i} style={{
                width: '40px', height: '40px', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: icon.active ? 'rgba(29,158,117,0.10)' : 'transparent',
                color: icon.active ? '#1D9E75' : '#8A9490',
                margin: '2px 0',
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.d}/>
                </svg>
              </div>
            ))}
            <div style={{ flex: 1 }} />
            {/* Settings */}
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A9490' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
              </svg>
            </div>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '14px', background: '#F4F6F3', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '16px', fontWeight: 600, color: '#1A1D1B' }}>
                {lang === 'en' ? 'Dashboard' : 'Irányítópult'}
              </span>
              <span style={{
                padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
                background: 'rgba(29,158,117,0.10)', color: '#0F7A5A',
                border: '1px solid rgba(29,158,117,0.25)',
              }}>
                {lang === 'en' ? 'Restaurant' : 'Étterem'}
              </span>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {[
                { val: '24', label: lang === 'en' ? 'Labels today' : 'Mai cimkék', accent: true },
                { val: '147', label: lang === 'en' ? 'This month' : 'Ezen a héten', accent: false },
                { val: '8', label: lang === 'en' ? 'Saved templates' : 'Mentett sablonok', accent: false },
              ].map((s, i) => (
                <div key={i} style={{
                  background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '10px', padding: '10px 12px',
                }}>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: s.accent ? '#1D9E75' : '#1A1D1B', lineHeight: 1.1, marginBottom: '2px' }}>{s.val}</div>
                  <div style={{ fontSize: '10px', color: '#8A9490', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Section label */}
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#8A9490', letterSpacing: '0.7px', textTransform: 'uppercase' }}>
              {lang === 'en' ? 'Quick Print' : 'Gyors Nyomtatás'}
            </div>

            {/* Label cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {[
                { type: 'Bontás',       color: '#E8B96A', bg: '#FDF3E3', border: '#E8B96A', textColor: '#D4850A', date: lang === 'en' ? 'Today' : 'Ma',    name: lang === 'en' ? 'Opening date' : 'Bontás napja' },
                { type: 'Érvényes',     color: '#6BCBA8', bg: 'rgba(29,158,117,0.08)', border: 'rgba(29,158,117,0.30)', textColor: '#0F7A5A', date: '05.04', name: lang === 'en' ? 'Chicken Soup' : 'Csirkeleves' },
                { type: 'Termék leírás',color: '#7AADE8', bg: 'rgba(46,123,196,0.06)', border: 'rgba(46,123,196,0.20)', textColor: '#2E7BC4', date: '06.04', name: lang === 'en' ? 'Beef Stew' : 'Marhapörkölt' },
                { type: 'Custom',       color: '#A89FE8', bg: 'rgba(107,99,204,0.06)', border: 'rgba(107,99,204,0.20)', textColor: '#6B63CC', date: '04.04', name: lang === 'en' ? 'Tiramisu' : 'Tiramisu' },
              ].map((card, i) => (
                <div key={i} style={{
                  background: card.bg, border: `1px solid ${card.border}`,
                  borderRadius: '10px', padding: '10px', cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: card.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '9px', fontWeight: 600, color: card.textColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{card.type}</span>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#1A1D1B', marginBottom: '4px', lineHeight: 1.2 }}>{card.name}</div>
                  <div style={{
                    fontSize: '9px', fontWeight: 600, padding: '2px 6px', borderRadius: '4px',
                    background: `${card.color}22`, color: card.textColor, display: 'inline-block', marginTop: '4px',
                  }}>{card.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}