// setup
const setupContext = require.context('./', true, /setup\.js$/)
setupContext.keys().forEach(setupContext)

// tests
const testsContext = require.context('./', true, /-test\.js$/)
testsContext.keys().forEach(testsContext)

// src
const srcContext = require.context('../src', true, /\.*$/)
srcContext.keys().forEach(srcContext)