var gulp = require('gulp');
var loader = require('gulp-load-plugins')();
gulp.task('server', function() {
    return gulp.src('./banner/')
        .pipe(loader.webserver({
            port: 9000,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') { return };
                var pathname = require('url').parse(req.url).pathname;
                if (pathname === '/') {
                    res.end(require('fs').readFileSync('./banner/index.html'));
                } else {
                    res.end(require('fs').readFileSync(require('path').join(__dirname, 'banner', pathname)));
                }

            }
        }))
})

gulp.task('dev', gulp.series('server'));