const gulp = require("gulp")
const stylus = require("gulp-stylus")
const path = require("path")
const autoprefixer = require("autoprefixer-stylus")

let dst = "dist/"

// STYLUS

let stylInput = ["assets/css/*.styl", "app/**/*.styl"]
let stylOptions = {
	compress: true,
	use: [autoprefixer(
		"> 2%"
	)]
}

gulp.task("styl", () => {
	return gulp
		.src(stylInput)
		.pipe(stylus(stylOptions))
		// .pipe(cssmin())
		// .pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(dst))
})

moveInpupt = ["app/**/*.css", "app/**/*.html"]

gulp.task("move", () => {
	return gulp
		.src(moveInpupt)
		.pipe(gulp.dest(dst))
})

// WATCH

function logEvent(event) {
	console.log(`File ${path.relative(__dirname, event.path)} was ${event.type}, running tasks...`)
}

gulp.task("watch", () => {
	gulp.watch(stylInput, ["styl"]).on("change", logEvent)
	gulp.watch(moveInpupt, ["move"]).on("change", logEvent)
})

// DEFAULT

gulp.task("default", ["styl", "move"])
