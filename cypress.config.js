const { defineConfig } =  require('cypress')

module.exports = defineConfig({
    e2e: {
        specPattern         : 'cypress/support/e2e/run.spec.js',
        testIsolation       : false,
        supportFile         : false,
        experimentalStudio  : true,
        baseUrl             : 'https://kasirdemo.belajarqa.com/'
    }
})