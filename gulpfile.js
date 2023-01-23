const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
  css: [
    'styles/*.scss',
    'styles/components/*.scss',
    'styles/templates/*.scss',
    'styles/sections/*.scss',
    'styles/snippets/*.scss',
    'styles/vendors/*.scss',
    'styles/global/*.scss',
  ]
}

function transpileSassIntoCss() {
  return gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('assets'))
}

function watchChanges() {
  transpileSassIntoCss();
  gulp.watch(paths.css, gulp.series('sass'));
}

gulp.task('sass', transpileSassIntoCss)
gulp.task('watch', watchChanges)
