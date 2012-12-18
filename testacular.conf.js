// Testacular configuration
// Generated on Tue Dec 18 2012 13:19:30 GMT+0100 (CET)


// base path, that will be used to resolve files and exclude
basePath = "."


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  'spec/vendor/*.js',
  'lib/struct.js',
  'spec/spec.js',
  'spec/helper.js'
];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_WARN;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = [ 'Firefox', 'PhantomJS', 'Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
