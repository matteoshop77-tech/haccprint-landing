export const DOWNLOAD_URL = 'https://github.com/matteoshop77-tech/haccp-print/releases/download/v1.0.0/HACCPrint_1.0.0_x64-setup.exe'

export const BRAND = {
  color:       '#1D9E75',
  colorDark:   '#0F7A5A',
  colorDarker: '#0A5C42',
  colorMuted:  'rgba(29,158,117,0.10)',
  colorBorder: 'rgba(29,158,117,0.25)',
}

export const COLORS = {
  appBg:      '#F4F6F3',
  sidebar:    '#ECEEE9',
  surface:    '#FFFFFF',
  elevated:   '#F9FAF8',
  border:     'rgba(0,0,0,0.08)',
  borderHover:'rgba(0,0,0,0.16)',
  ink:        '#1A1D1B',
  ink2:       '#4A5250',
  ink3:       '#8A9490',
  ink4:       '#C0C8C4',
  amber:      '#D4850A',
  amberMuted: 'rgba(212,133,10,0.10)',
  coral:      '#C04A28',
  sky:        '#2E7BC4',
  violet:     '#6B63CC',
}

export const PLANS = {
  starter: {
    price: '€9',
    features: [
      'price_f1',
      'price_f2',
      'price_f3',
      'price_f4',
      'price_f5',
    ],
  },
  pro: {
    price: '€19',
    features: [
      'price_f6',
      'price_f2',
      'price_f3',
      'price_f4',
      'price_f7',
      'price_f8',
    ],
  },
} as const