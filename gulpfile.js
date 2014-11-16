'use strict';

//Load all Gulp modules
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
  minifyCSS = require('gulp-minify-css'),
  minifyHTML = require('gulp-minify-html'),
  imagemin = require('gulp-imagemin'),
  pngcrush = require('imagemin-pngcrush'),
  shell = require('gulp-shell'),

	//variables to reference all files
	jsFiles = ['app/*.js','app/js/*.js'],
	scssFiles = ['css/main.scss'],
  cssFiles = ['css/main.css'];


// Precompile Sass
gulp.task('sass', function() {

  gulp.src(scssFiles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});



//Jshint all JS files
gulp.task('lint',function(){
	gulp.src(jsFiles)
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
	.pipe(connect.reload());
});

//update HTML with livereload
gulp.task('html', function(){
	  gulp.src('app/index.html')
    	.pipe(plumber())
    	.pipe(connect.reload());
});

//watch task to re-run other tasks on save
gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch(['app/index.html'], ['html']);
  gulp.watch(jsFiles, ['lint']);
});


gulp.task('minify-css', function() {
  gulp.src(cssFiles)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('build/css/'))
});

gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};

  gulp.src('app/index.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('build/'))
});

gulp.task('minify-img', function () {
    return gulp.src('images/IMG_55493.jpg')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('build/images'));
});

//task to run all
gulp.task('default', ['sass','lint','watch']);
gulp.task('build',['sass','minify-html','minify-css','minify-img']);