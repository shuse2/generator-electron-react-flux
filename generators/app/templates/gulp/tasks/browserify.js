var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var config = require('../config.js').browserify;

gulp.task('browserify', function(){
  var b = browserify({
    entries: config.src,
    transform: config.settings.transform,
    detectGlobals: false,
    buildins: []
  });
  return b.bundle()
    .pipe(source(config.outputName))
    .pipe(gulp.dest(config.dest));
});
