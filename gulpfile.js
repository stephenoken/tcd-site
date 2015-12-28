var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("styles",function () {
  return gulp.src("./src/styles/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./public/"))
});

gulp.task("default",["styles"],function () {
  gulp.watch("./src/styles/**/*.scss",["styles"]);
});
