const envSettings = window;

export const config = {
  server: {
    host: envSettings.NODEJS_HOST || 'localhost',
    port: envSettings.NODEJS_PORT || '3000'
  },
  maxSlots: 4,
  maxBars: 30,
  colors: {
    bathroom: '#193CB8',
    inside: '#EC253F',
    outside: '#5EA529'
  }
}

export default config
