"use strict";

const projectName = 'money';
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const del = require('del');
const karmaServer = require('karma').Server;

function scripts() {
    return gulp.src('source/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat(projectName + '.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Scripts task complete' }));
}

function tests(done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
}

function clean() {
    return del(['dist']);
}

function watch() {
    gulp.watch('source/*.js', ['scripts']);
}

const build = gulp.series(clean, tests, scripts, watch);

exports.scripts = scripts;
exports.tests = tests;
exports.clean = clean;
exports.watch = watch;
exports.default = build;