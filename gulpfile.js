var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task("styles",function () {
  return gulp.src("./src/styles/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.init())
    .pipe(concat("styles.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./public/"))
});

gulp.task("script",function () {
    return gulp.src("./src/javascript/**/*.js")
    .pipe(gulp.dest("./public"));
});

gulp.task("default",["styles","script"],function () {
  gulp.watch("./src/styles/**/*.scss",["styles"]);
  gulp.watch("./src/javascript/**/*.js",["script"]);
});
