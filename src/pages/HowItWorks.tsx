import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/LangContext'
import { t } from '../lib/i18n'
import { DOWNLOAD_URL } from '../lib/constants'

import screenLabels from '../assets/screen-labels.png'
import screenPreview from '../assets/screen-preview.png'
import screenDashboard from '../assets/screen-dashboard.png'
import screenCategories from '../assets/screen-categories.png'
import screenSettings from '../assets/screen-settings.png'
import screenExport from '../assets/screen-export.png'
import screenNewLabel from '../assets/screen-new-label.png'

const SECTIONS = [
  {
    number: '01',
    titleKey: 'hiw_s1_title' as const,
    bodyKey:  'hiw_s1_body'  as const,
    images:   [screenLabels, screenNewLabel],
    captions: ['Lista cimkék', 'Új cimke létrehozása'],
    flip: false,
    accent: '#1D9E75',
    accentMuted: 'rgba(29,158,117,0.08)',
  },
  {
    number: '02',
    titleKey: 'hiw_s2_title' as const,
    bodyKey:  'hiw_s2_body'  as const,
    images:   [screenPreview],
    captions: ['Nyomtatási előnézet'],
    flip: true,
    accent: '#2E7BC4',
    accentMuted: 'rgba(46,123,196,0.08)',
  },
  {
    number: '03',
    titleKey: 'hiw_s3_title' as const,
    bodyKey:  'hiw_s3_body'  as const,
    images:   [screenDashboard],
    captions: ['Dashboard — gyors nyomtatás'],
    flip: false,
    accent: '#D4850A',
    accentMuted: 'rgba(212,133,10,0.08)',
  },
  {
    number: '04',
    titleKey: 'hiw_s4_title' as const,
    bodyKey:  'hiw_s4_body'  as const,
    images:   [screenCategories],
    captions: ['Kategóriák kezelése'],
    flip: true,
    accent: '#6B63CC',
    accentMuted: 'rgba(107,99,204,0.08)',
  },
  {
    number: '05',
    titleKey: 'hiw_s5_title' as const,
    bodyKey:  'hiw_s5_body'  as const,
    images:   [screenSettings],
    captions: ['Iparági profilok'],
    flip: false,
    accent: '#1D9E75',
    accentMuted: 'rgba(29,158,117,0.08)',
  },
  {
    number: '06',
    titleKey: 'hiw_s6_title' as const,
    bodyKey:  'hiw_s6_body'  as const,
    images:   [screenExport],
    captions: ['HACCP napló exportálása'],
    flip: true,
    accent: '#C04A28',
    accentMuted: 'rgba(192,74,40,0.08)',
  },
]

export default function HowItWorks() {
  const { lang } = useLang()
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div style={{ background: '#F7F8F6', paddingTop: '60px' }}>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div style={{
            position: 'relative', maxWidth: '1000px', width: '100%',
          }}>
            <div style={{
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}>
              <div style={{
                background: '#ECEEE9', height: '32px',
                display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px',
                borderBottom: '1px solid rgba(0,0,0,0.10)',
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
              <img
                src={lightbox}
                alt="Screenshot"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <p style={{
              textAlign: 'center', marginTop: '12px',
              fontSize: '13px', color: 'rgba(255,255,255,0.6)',
            }}>
              {lang === 'en' ? 'Click anywhere to close' : 'Kattints bárhova a bezáráshoz'}
            </p>
          </div>
        </div>
      )}

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(180deg, #ECEEE9 0%, #F7F8F6 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.25)',
          color: '#0F7A5A', fontSize: '12px', fontWeight: 600,
          padding: '5px 14px', borderRadius: '20px', marginBottom: '1.5rem',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#1D9E75' }} />
          {lang === 'en' ? 'How it works' : 'Hogyan működik'}
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700,
          letterSpacing: '-1px', color: '#1A1D1B',
          maxWidth: '700px', margin: '0 auto 1rem',
        }}>
          {t('hiw_hero_title', lang)}
        </h1>
        <p style={{
          fontSize: '1.05rem', color: '#4A5250',
          maxWidth: '560px', margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {t('hiw_hero_sub', lang)}
        </p>
      </div>

      {/* SECTIONS */}
      {SECTIONS.map((section, i) => (
        <div key={i}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            padding: '5rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            direction: section.flip ? 'rtl' : 'ltr',
          }}>

            {/* TEXT */}
            <div style={{ direction: 'ltr' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                marginBottom: '1.25rem',
              }}>
                <span style={{
                  fontSize: '3rem', fontWeight: 700, lineHeight: 1,
                  color: section.accent, opacity: 0.25, letterSpacing: '-2px',
                }}>
                  {section.number}
                </span>
                <div style={{
                  height: '1px', width: '40px',
                  background: section.accent, opacity: 0.3,
                }} />
              </div>

              <h2 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700,
                letterSpacing: '-0.5px', color: '#1A1D1B', marginBottom: '1rem',
                lineHeight: 1.2,
              }}>
                {t(section.titleKey, lang)}
              </h2>

              <p style={{
                fontSize: '15px', color: '#4A5250',
                lineHeight: 1.8, marginBottom: '1.5rem',
              }}>
                {t(section.bodyKey, lang)}
              </p>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: section.accentMuted,
                border: `1px solid ${section.accent}33`,
                padding: '8px 16px', borderRadius: '20px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: section.accent }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: section.accent }}>
                  {lang === 'en' ? 'HACCPrint feature' : 'HACCPrint funkció'}
                </span>
              </div>
            </div>

            {/* IMAGES */}
            <div style={{
              direction: 'ltr',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              {section.images.map((img, j) => (
                <div key={j}>
                  <div
                    onClick={() => setLightbox(img)}
                    style={{
                      borderRadius: '14px', overflow: 'hidden',
                      border: '1px solid rgba(0,0,0,0.10)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                      cursor: 'zoom-in',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.01)'
                      e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)'
                    }}
                  >
                    <div style={{
                      background: '#ECEEE9', height: '28px',
                      display: 'flex', alignItems: 'center', padding: '0 10px', gap: '6px',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F' }} />
                      <div style={{ flex: 1 }} />
                      <span style={{ fontSize: '10px', fontWeight: 600, color: '#4A5250' }}>
                        HACC<span style={{ color: '#1D9E75' }}>Print</span>
                      </span>
                      <div style={{ flex: 1 }} />
                    </div>
                    <img
                      src={img}
                      alt={section.captions[j]}
                      style={{ width: '100%', display: 'block' }}
                    />
                  </div>
                  <div style={{
                    marginTop: '8px', textAlign: 'center',
                    fontSize: '12px', color: '#8A9490', fontWeight: 500,
                  }}>
                    {section.captions[j]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {i < SECTIONS.length - 1 && (
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
              }} />
            </div>
          )}
        </div>
      ))}

      {/* CTA FINALE */}
      <div style={{
        background: '#ECEEE9',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        padding: '5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700,
            letterSpacing: '-0.5px', color: '#1A1D1B', marginBottom: '1rem',
          }}>
            {t('hiw_cta_title', lang)}
          </h2>
          <p style={{ fontSize: '1rem', color: '#4A5250', marginBottom: '2rem', lineHeight: 1.7 }}>
            {t('hiw_cta_sub', lang)}
          </p>
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
          <p style={{ fontSize: '12px', color: '#8A9490', marginTop: '1rem' }}>
            {t('hero_note', lang)}
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link
              to="/"
              style={{ fontSize: '13px', color: '#8A9490', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1D9E75')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8A9490')}
            >
              ← {lang === 'en' ? 'Back to home' : 'Vissza a főoldalra'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}