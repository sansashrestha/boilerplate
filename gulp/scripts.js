const gulp = require("gulp");

// packages
const uglify = require("gulp-uglify");
const eslint = require("gulp-eslint");
const webpack = require("webpack");
const webpackconfig = require("../webpack.config");
const webpackstream = require("webpack-stream");

// Lint scripts
function lint() {
    return gulp
        .src([
            "./src/assets/js/components/**/*",
            "./src/assets/js/app.js",
            "./gulpfile.js"
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function build() {
    return (
        gulp
        .src([
            "./src/assets/js/**/*"
        ])
        .pipe(webpackstream(webpackconfig, webpack))
        .pipe(uglify()) //to get uniminified JS comment this line and uncomment in webpack.config.js
        .pipe(gulp.dest("./dist/assets/js"))
    );
}

// exports (Common JS)
module.exports = {
    lint: lint,
    build: build
};