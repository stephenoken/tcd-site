const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const exec = require('child_process').exec;
const uglify = require('gulp-uglify');

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
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest("./public"));
});

gulp.task("compile-php",function () {
    exec("php index.php > temp.html",function (err,stdout,stderr) {
      if (err != null) {
        console.log("Error: " + error);
      }
    });
});

gulp.task("default",["styles","script","compile-php"],function () {
  gulp.watch("./src/styles/**/*.scss",["styles"]);
  gulp.watch("./src/javascript/**/*.js",["script"]);
  gulp.watch("./index.php",["compile-php"]);
});
