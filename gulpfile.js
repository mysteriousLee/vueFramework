var gulp = require('gulp'),
	webpack = require('webpack'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	runSequence = require('run-sequence'),
	webpackConfig = require('./webpack.config.js');
	
gulp.task('webpack', function(){
	var myConfig = Object.create(webpackConfig);
	webpack(myConfig, function(){

	});
});

gulp.task('concat-lib', function(){
	gulp.src('lib/*.js')
		.pipe(concat('lib.js'))
		.pipe(uglify())
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(gulp.dest('lastpack/js/'));
});

gulp.task('watch', function(){
	gulp.watch('src/**', ['webpack']);
});

gulp.task('start', function(){
	runSequence('concat-lib', 'webpack', 'watch');
});