var gulp = require('gulp');
var webpack = require('gulp-webpack');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var del = require('del');


// ----------------- Javascript ----------------- //


// Clean JS task
gulp.task('clean:js', function() {
	return del([
		'dist/js'
	]);
});


// Webpack task - Builds the ES6
gulp.task('webpack', [ 'clean:js' ], function( uglify ) {
	return gulp.src('src/js/**/*')
		.pipe(webpack( require('./configs/webpack.config.js') ))
		.pipe(gulp.dest('dist/js/'));
});


// Minify JS task
gulp.task('uglifyjs', [ 'webpack' ], function() {
	gulp.src('dist/js/audibly.js')
		.pipe( uglify() )
		.pipe( gulp.dest('dist/js/') );
});


// JS task
gulp.task('js', [ 'webpack' ], function() {
	gulp.watch( [ 'src/js/**/*' ], [ 'webpack' ] );
});


// ----------------- SASS ----------------- //


// Clean CSS task
gulp.task('clean:css', function() {
	return del([
		'dist/css'
	]);
});


// SASS task - Builds the SASS
gulp.task('sass', [ 'clean:css' ], function() {
	return sass('src/sass/audibly.scss')
		.pipe( autoprefixer( {
			browsers: ['last 2 version']
		} ) )
		.on('error', sass.logError)
		.pipe( rename( { basename: 'audibly' } ) )
		.pipe( gulp.dest('dist/css/') );
});


// Minify CSS task
gulp.task('nanocss', [ 'sass' ], function() {
	gulp.src('dist/css/audibly.css')
		.pipe( nano() )
		.pipe( gulp.dest('dist/css/') );
});


// CSS task
gulp.task('css', [  ], function() {
	gulp.watch( 'src/scss/**/*.scss', [ 'sass' ] );
});


// ----------------- Development ----------------- //


// Spins up a server
gulp.task('serve', function() {
  connect.server({
  	root: 'dist',
  	port: 8080,
  	livereload: true
  });
});


// Dev task
gulp.task( 'dev', [ 'css', 'js' ] );


// Deploy task
gulp.task( 'deploy', [ 'nanocss', 'uglifyjs' ] );


gulp.task('default', function() {
	console.log('\n\n No Default Task set up, try either: \n * gulp dev \n * gulp deploy');
});
