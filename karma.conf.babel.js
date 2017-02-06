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
      entry: ['./src/Fixture.js'],
      // sourcemaps only seem to work when set
      // as 'inline-source-map' when using Istanbul
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
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
