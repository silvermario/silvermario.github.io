var gulp = require('gulp');
var sass = require('gulp-sass');
//var browserify = require('gulp-browserify');
//var concat = require('gulp-concat');
//var styl = require('gulp-styl');
/*var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
*/

var connect = require('gulp-connect');


gulp.task('scripts', function() {
    gulp.src(['src/**/*.js'])
        //.pipe(browserify())
        //.pipe(concat('dest.js'))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
})

gulp.task('styles', function() {
    gulp.src(['src/sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
})

gulp.task('templates', function() {
    gulp.src(['src/*.html'])
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
})

/*gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})*/
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watchMyStyles', function() {
    //gulp.run(/*'lr-server',*/ 'scripts', 'styles');

    gulp.watch('src/js/**',['scripts']);

    gulp.watch('src/sass/**', ['styles']);

    gulp.watch('src/*.html', ['templates']);
})

gulp.task('default', ['watchMyStyles', 'connect']);