var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js').watch;


gulp.task('watch', function() {
  gulp.watch(config.src,['build']);
});
