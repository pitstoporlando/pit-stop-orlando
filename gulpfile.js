// --------------------------------------------
// Dependencies
// --------------------------------------------
const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      del = require('del'),
      minifycss = require('gulp-minify-css'),
      plumber = require('gulp-plumber'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      images = require('gulp-imagemin'),
      browserSync = require('browser-sync').create();


// paths
const styleSrc = 'source/sass/**/*.sass',
      styleDest = 'build/assets/css/',
      htmlSrc = 'source/',
      htmlDest = 'build/',
      vendorSrc = 'source/js/vendors/',
      vendorDest = 'build/assets/js/',
      scriptSrc = 'source/js/*.js',
      scriptDest = 'build/assets/js/';


// --------------------------------------------
// Stand Alone Tasks
// --------------------------------------------


// Compiles all SASS files
gulp.task('sass', function() {
    gulp.src('source/sass/**/*.sass')
    .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
          }))
        .pipe(gulp.dest('build/assets/css'));
});

// Uglify js files
gulp.task('scripts', function() {
    gulp.src('source/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});

// Concat and Compress Vendor .js files
gulp.task('vendors', function() {
    gulp.src(
            [
                'source/js/vendors/jquery.min.js',
                'source/js/vendors/*.js'
            ])
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});


// Watch for changes
gulp.task('watch', function(){
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });

    gulp.watch(styleSrc,['sass']);
    gulp.watch(scriptSrc,['scripts']);
    gulp.watch(vendorSrc,['vendors']);
    // gulp.watch('source/img/*',['images']);
    gulp.watch(['./*.html', 'build/assets/css/*.css', 'build/assets/js/*.js', 'build/assets/js/vendors/*.js']).on('change', browserSync.reload);

});


// use default task to launch Browsersync and watch JS files
gulp.task('default', [ 'sass', 'scripts', 'vendors', 'watch'], function () {});
