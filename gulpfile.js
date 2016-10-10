var projectName = 'money',
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    karmaServer = require('karma').Server;

gulp.task('scripts', function() {
    return gulp.src('source/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat(projectName + '.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('test', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
    }, done).start();
});

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('watch', function() {
    gulp.watch('source/*.js', ['scripts']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('test', 'scripts', 'watch');
});