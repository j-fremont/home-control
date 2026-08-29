const envSettings = window;

export const config = {
  server: {
    host: envSettings.NODEJS_HOST || 'localhost',
    port: envSettings.NODEJS_PORT || '3000'
  },
  maxSlots: 4,
  maxBars: 30,
  colors: {
    bathroom: '#4682B4', // SteelBlue
    inside: '#CD5C5C', // IndianRed
    outside: '#6B8E23', // OliveDrab
    floor: '#BA55D3' // MediumOrchid
  }
}

export default config
