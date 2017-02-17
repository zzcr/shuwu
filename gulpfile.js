'use strict';

// 载入Gulp模块
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var base = require('gulp-base64');
// 注册脚本合并压缩任务
gulp.task('script', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('base',function() { 
  return gulp.src('./css/*.css')
  .pipe(base({
    baseDir: './dist/css',
    maxImageSize: 40 * 1024,
    debug: false 
  }))
  .pipe(cssnano())
  .pipe(gulp.dest('./dist/css')); 
});
gulp.task('html',function(){
  gulp.src('./*.html')
  .pipe(gulp.dest('./dist'))
});
gulp.task('images',function(){
  gulp.src('./images/*.*')
  .pipe(gulp.dest('./dist/images'))
});
gulp.task('default',['script','base','html','images']);



