const envSettings = window;

export const config = {
  server: {
    host: envSettings.NODEJS_HOST || 'localhost',
    port: envSettings.NODEJS_PORT || '3000'
  },
  maxSlots: 4
}

export default config
