var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');

gulp.task("styles",function () {
  return gulp.src("./src/styles/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.init())
    .pipe(concat("styles.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(gzip())
    .pipe(gulp.dest("./public/"))
});

gulp.task("default",["styles"],function () {
  gulp.watch("./src/styles/**/*.scss",["styles"]);
});
