const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sassTaskWebsite() {
  return src('website/**/*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./website', { sourcemaps: '.' }));
}

exports.default = series(
  sassTaskWebsite,
);