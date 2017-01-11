'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var src = {
  js: [
    'gulpfile.js', 'lib/**/*.js'
  ]
};
gulp.task('jshint', () => {
  return gulp.src(src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs', () => {
  return gulp.src(src.js)
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('default', ['jshint', 'jscs']);
