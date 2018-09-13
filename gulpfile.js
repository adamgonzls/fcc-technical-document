const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
// const ghPages       = require('gulp-gh-pages');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    files: "styles.css",
    // httpd-vhosts.conf users:
    open: "external",
    host: "fcc-survey.test",
    proxy: "fcc-survey.test/public",
    port: 3000
  });

  gulp.watch("./scss/**/*.scss", ['sass']);
  gulp.watch("./public/*.js").on('change', browserSync.reload);
  gulp.watch("./public/*.html").on('change', browserSync.reload);

});
  
gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  //pipe to autoprefixer
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

// add css maps