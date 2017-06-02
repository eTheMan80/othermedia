var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    bs = require('browser-sync').create(),
    jsFiles = 'src/js/*.js',
    jsDest = 'dist/js';

gulp.task('browser-sync', ['sass', 'js-watch'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('js-watch', ['scripts'], function (done) {
    bs.reload();
    done();
});

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
                .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                .pipe(concat('style.min.css'))
                .pipe(gulp.dest('dist/css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js-watch']);
    gulp.watch("*.html").on('change', bs.reload);
});
