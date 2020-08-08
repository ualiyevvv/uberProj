var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('sever', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles',function(){
    return gulp.src('src/sass|scss')
})

