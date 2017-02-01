const path = require('path')

module.exports = (config) => {
  config.set({

    singleRun: false,
    logLevel: config.LOG_ERROR,
    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    reporters: ['mocha', 'coverage'],

    files: [
      './test/test.bundle.js',
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'coverage'],
      'test/**/*.js': ['webpack'],
    },

    webpack: { // kind of a copy of your webpack config
      devtool: 'cheap-module-source-map', // just do inline source maps instead of the default
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: `babel-loader`
          }
        ]
      },
      externals: [
          'react/addons',
          'react/lib/ExecutionEnvironment',
          'react/lib/ReactContext'
      ]
    },

    webpackServer: {
      noInfo: true,
      quiet: true
    },

    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage', subdir: '.' },
        { type: 'text' }
      ],
      includeAllSources: true
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-clear-screen-reporter'
    ],

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd',
      },
    },

    port: 9876,
    colors: true,
    autoWatch: true
  })
};
