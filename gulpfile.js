var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint')
;

gulp.task('js', function() {
  return gulp.src(['./src/img-loader.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(rename('img-loader-min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./src/'))
  ;
});

gulp.task('main-js', function() {
  return gulp.src(['./main.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  ;
});

gulp.task('default', ['js', 'main-js']);
