var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

var config = require('../config.js').sass;

gulp.task('sass', function() {
  gulp.src(config.src)
  .pipe(sass().on('error', sass.logError))
  .pipe(concatCss(config.outputName))
  .pipe(gulp.dest(config.dest));
});
