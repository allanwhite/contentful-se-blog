module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Clarika', 'ui-sans-serif', 'system-ui'],
      'serif': ['Sentinel', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Clarika'],
      'body': ['Sentinel'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
