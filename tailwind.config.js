module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ['html', 'body'],
      // blocklist: [/^debug-/],
      keyframes: true,
      fontFace: false,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Clarika', 'ui-sans-serif', 'system-ui'],
      'serif': ['Sentinel', 'ui-serif', 'Georgia'],
      'mono': ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular'],
      'display': ['Clarika'],
      'body': ['Sentinel'],
    },
    fontSize: {
      'tiny': '0.75rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2xl-scale': 'calc(0.5vw + 1.5rem)',
      '3xl': '1.875rem',
      '3xl-scale': 'calc(1.5vw + 1.125rem)',
      '4xl': '2.25rem',
      '4xl-scale': 'calc(1.5vw + 2rem)',
      '5xl': '3rem',
      '5xl-scale': 'calc(3vw + 2rem)',
      '6xl': '5rem',
      '6xl-scale': 'calc(4vw + 2rem)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
