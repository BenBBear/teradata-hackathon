var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');


var paths = {
    sass: ['./www/scss/*.scss'],
    js: []
};

var output = {
    js: './www/dist/js/'
};

['resolve', 'config', 'run', 'controller', 'filter', 'factory', 'directive', 'service','provider']
.forEach(function(x) {
    paths.js.push('./www/js/' + x + '/*.js');
    paths.js.push('./www/js/' + x + '/*/*.js');
    paths.js.push('!./www/js/' + x + '/.#*');
    paths.js.push('!./www/js/' + x + '/*/.#*');
});



gulp.task('default', ['sass', 'js']);

gulp.task('js', function(done) {
    gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(output.js))
        .on('end', done);
});

gulp.task('sass', function(done) {
    gulp.src('./www/scss/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(gulp.dest('./www/dist/css/'))
        .on('end', done);
});


gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['js']);
});
