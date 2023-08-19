const { defineConfig } =  require('cypress')

module.exports = defineConfig({
    e2e: {
        specPattern     : 'cypress/support/e2e',
        supportFile     : 'cypress/support/command',
        baseUrl         : 'https://kasirdemo.belajarqa.com/'
    }
})