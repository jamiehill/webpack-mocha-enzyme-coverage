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
      './test/test.bundle.js': ['webpack']
    },

    webpack: {
      entry: ['./src/Foo.js'],
      devtool: 'cheap-module-source-map',
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
      includeAllSources: false
    },

    plugins: [
      'karma-mocha',
      'karma-webpack-with-fast-source-maps',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-coverage'
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
