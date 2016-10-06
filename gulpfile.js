var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('watch', function () {
    return watch('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('concat', function() {
  return gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js'));
});
