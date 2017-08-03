
// include gulp
var gulp = require('gulp'); 
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('js', function() {
  gulp.src(['./fsms/js/*.js'])
    //.pipe(concat('all.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});


// CSS concat, auto-prefix and minify
gulp.task('css', function() {
  gulp.src(['./fsms/css/*.css'])
    //.pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'));
});

// default gulp task
gulp.task('default', [ 'js', 'css'], function() {   

// watch for JS changes
gulp.watch('./fsms/js/*.js', function() {
    gulp.run('jshint', 'js');
  });
// watch for CSS changes
gulp.watch('./fsms/css/*.css', function() {
        gulp.run('css');
  });
});
