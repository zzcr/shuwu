'use strict';

// 载入Gulp模块
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var base = require('gulp-base64');
gulp.task('style', function() {
  gulp.src('files/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
});

// 注册脚本合并压缩任务
gulp.task('script', function() {
  gulp.src('files/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});
gulp.task('base',function() { 
  return gulp.src('./files/*.css')
  .pipe(base({
    baseDir: './dist',
    maxImageSize: 40 * 1024,
    debug: false 
  }))
  .pipe(gulp.dest('./dist')); 
});



