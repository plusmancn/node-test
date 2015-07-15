'use strict';
/**
 * @description 参考资料
 *
 * ## gulp.src
 * [api doc](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options)
 * [glob](https://github.com/isaacs/node-glob.git)
 */

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();


/****************** bower插件资源打包 ***********************/
var BOWER_PATH = './bower_components/';
var DEST_PATH = './static/';

// 打包bootstrap3
gulp.task('pa-bootstrap',function(){
  var BOWER_PATH_BOOTSTRAP = BOWER_PATH + 'bootstrap/dist/';
  return gulp.src([
    BOWER_PATH_BOOTSTRAP + 'css/*.min.css',
    BOWER_PATH_BOOTSTRAP + 'fonts/*',
    BOWER_PATH_BOOTSTRAP + 'js/*.min.js'],{base:BOWER_PATH_BOOTSTRAP})
  .pipe(gulp.dest( DEST_PATH + 'bootstrap/'));
});

// 打包jquery
gulp.task('pa-jquery',function(){
  var BOWER_PATH_JQUERY = BOWER_PATH + 'jquery/dist/';
  return gulp.src([
      BOWER_PATH_JQUERY + '*.min.js'
    ],{base:BOWER_PATH_JQUERY})
  .pipe(gulp.dest(DEST_PATH + 'jquery/'));
});

gulp.task('pa-bower',['pa-bootstrap','pa-jquery']);