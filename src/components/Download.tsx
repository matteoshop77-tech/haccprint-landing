import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'
import { DOWNLOAD_URL } from '../lib/constants'

export default function Download() {
  const { lang } = useLang()

  return (
    <section id="download" style={{ padding: '6rem 2rem' }}>
      <div style={{
        maxWidth: '660px', margin: '0 auto',
        background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '18px', padding: '3.5rem 2rem', textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}>

        {/* Icona */}
        <div style={{
          width: '64px', height: '64px', borderRadius: '14px',
          background: 'rgba(29,158,117,0.10)', border: '1px solid rgba(29,158,117,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.75rem',
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </div>

        <h2 style={{ fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.5px', color: '#1A1D1B', marginBottom: '0.6rem' }}>
          {t('dl_title', lang)}
        </h2>
        <p style={{ color: '#4A5250', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.75rem' }}>
          {t('dl_sub', lang)}
        </p>

        {/* Bottone download */}
        <a
          href={DOWNLOAD_URL}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '9px',
            background: '#1D9E75', color: 'white',
            padding: '14px 32px', borderRadius: '10px',
            fontSize: '15px', fontWeight: 600, textDecoration: 'none',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0F7A5A'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1D9E75'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2v11M6 9l4 4 4-4M4 16h12"/>
          </svg>
          {t('dl_btn', lang)}
        </a>

        {/* Requisiti */}
        <div style={{
          display: 'flex', gap: '1.5rem', justifyContent: 'center',
          flexWrap: 'wrap', marginTop: '1.25rem',
        }}>
          {[
            { icon: 'M3 3h18v14H3zM8 21h8M12 17v4', text: t('dl_req1', lang) },
            { icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2zM12 6v6l4 2', text: t('dl_req2', lang) },
            { icon: 'M5 12h14M12 5l7 7-7 7', text: t('dl_req3', lang) },
          ].map((req, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#8A9490' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8A9490" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={req.icon}/>
              </svg>
              {req.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}