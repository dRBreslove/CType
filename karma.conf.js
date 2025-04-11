export default function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/**/*.ts',
      'test/**/*.ts'
    ],
    preprocessors: {
      '**/*.ts': ['typescript']
    },
    typescriptPreprocessor: {
      options: {
        sourceMap: true,
        target: 'ES5',
        module: 'commonjs',
        noImplicitAny: true
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
}; 