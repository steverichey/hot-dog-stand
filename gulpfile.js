var gulp = require("gulp");
var rename = require("gulp-rename");
var csslint = require("gulp-csslint");
var cssmin = require("gulp-cssmin");
var copy = require("gulp-copy");

gulp.task("default", function() {
	gulp.src("src/*.css")
		.pipe(csslint(".csslintrc"))
		.pipe(csslint.reporter());

	gulp.src("src/*.css")
		.pipe(copy("dist/", {prefix: 1}));

	gulp.src("src/*.css")
		.pipe(cssmin())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("dist/"));
});