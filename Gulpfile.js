const gulp = require('gulp')
const stylus = require('gulp-stylus')
const path = require('path')
const autoprefixer = require('autoprefixer-stylus')

// STYLUS

var stylInput = 'assets/css/*.styl'
var stylOutput = 'assets/css/'

var stylOptions = {
	compress: true,
	use: [autoprefixer(
		"> 2%"
	)]
}

gulp.task('styl', () => {
	return gulp
		.src(stylInput)
		.pipe(stylus(stylOptions))
		// .pipe(cssmin())
		// .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(stylOutput))
})

// WATCH

function logEvent(event) {
	console.log(`File ${path.relative(__dirname, event.path)} was ${event.type}, running tasks...`)
}

gulp.task('watch', () => {
	gulp.watch(stylInput, ['styl']).on('change', logEvent)
})

// DEFAULT

gulp.task('default', ['styl'])
