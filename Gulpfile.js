var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    karma = require('gulp-karma'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

gulp.task('lint', function () {
    gulp.src('./src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            console.log(err);
            this.emit('end');
        });
});
gulp.task('libs', function () {
    return gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-resource/angular-resource.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('partials', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('stylus', function () {
    gulp.src([
        './src/**/*.css',
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(gulp.dest('dist/css'));
    gulp.src('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['lint', 'scripts']);
    gulp.watch('src/**/*.html', ['partials']);
    gulp.watch('src/**/*.css', ['stylus']);
});

gulp.task('clean', function () {
    gulp.src('./dist/.')
        .pipe(clean({force: true}));
});

gulp.task('default', ['libs', 'scripts', 'partials', 'stylus', 'watch']);
