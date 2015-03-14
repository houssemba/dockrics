var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    karma = require('gulp-karma'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    server = require('gulp-express'),
    clean = require('gulp-clean');

gulp.task('lint', function () {
   gulp.src('./app/**/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        });
});

gulp.task('watch', function () {
    gulp.watch('**/*.js', ['lint']);
});

gulp.task('clean', function () {
    gulp.src('./dist/.')
        .pipe(clean({force:true}));
});

gulp.task('connect', function () {
    server.run(['app.js']);
});

gulp.task('default', ['lint', 'connect']);
