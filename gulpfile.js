var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


/* Task to compile less */
gulp.task('compile-less', function(done) {
    gulp.src('./css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'));
    done()
});
/* Task to watch less changes */
gulp.task('watch-less', function(done) {
    gulp.watch('./css/*.less', gulp.series('compile-less'));
    done()
});

gulp.task('serve', function(done) {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./css/*.css").on("change", reload);
    gulp.watch("./*.html").on("change", reload);
    done()
});

/* Task when running `gulp` from terminal */
gulp.task('default', gulp.parallel('serve', 'watch-less'));