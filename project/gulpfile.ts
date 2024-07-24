const {src, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sassTaskProd() {
  return src(['assets/scss/main.scss'], {sourcemaps: true})
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('./assets/css', {sourcemaps: '.'}));
}


exports.default = series(
  sassTaskProd,
);