var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('default', function () {
	var port = process.env.PORT || 8000;
	gulp.src('')
	.pipe(shell([
		'http-server ./app -c-1 -p ' + port
	]))
})
