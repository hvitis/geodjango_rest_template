/* import necessary npm packages */
var gulp = require('gulp'),
    rtlcss = require('gulp-rtlcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpfilter = require('gulp-filter'),
    rename = require("gulp-rename"),
    autoPrefixer = require('gulp-autoprefixer');

/* scss to css compilation */
function sassCompiler(src, dest) {
    return function (done) {
        gulp.src(src)
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(autoPrefixer('last 10 versions'))
            .pipe(sourcemaps.write('maps'))
            .pipe(gulp.dest(dest));
        done();
    };
}

// bootstrap sass compiler
gulp.task('sass:bs', sassCompiler('public/assets/vendor_assets/css/bootstrap/bootstrap.scss', 'public/assets/vendor_assets/css/bootstrap/'));

// themes sass compiler
gulp.task('sass:theme', sassCompiler('public/assets/theme_assets/sass/style.scss', 'public/assets'));


// default gulp task
gulp.task('default', gulp.series('sass:theme', function () {
    gulp.watch('public/assets/theme_assets/sass/**/*', gulp.series('sass:theme'));
    gulp.watch('public/assets/vendor_assets/css/bootstrap/*.scss', gulp.series('sass:bs'));
    gulp.watch('public/assets/**/*.js');
}));

//rtl css generator
gulp.task('rtl', function (done) {
    var bootstrap = gulpfilter('public/assets/vendor_assets/css/bootstrap/bootstrap.css', {restore: true}),
        style = gulpfilter('public/assets/style.css', {restore: true});

    gulp.src(['public/assets/vendor_assets/css/bootstrap/bootstrap.css', 'public/assets/style.css'])
        .pipe(rtlcss({
            'stringMap': [
                {
                    'name': 'left-right',
                    'priority': 100,
                    'search': ['left', 'Left', 'LEFT'],
                    'replace': ['right', 'Right', 'RIGHT'],
                    'options': {
                        'scope': '*',
                        'ignoreCase': false
                    }
                },
                {
                    'name': 'ltr-rtl',
                    'priority': 100,
                    'search': ['ltr', 'Ltr', 'LTR'],
                    'replace': ['rtl', 'Rtl', 'RTL'],
                    'options': {
                        'scope': '*',
                        'ignoreCase': false
                    }
                }
            ]
        }))
        .pipe(bootstrap)
        .pipe(rename({suffix: '-rtl', extname: '.css'}))
        .pipe(gulp.dest('public/assets/vendor_assets/css/bootstrap'))
        .pipe(bootstrap.restore)
        .pipe(style)
        .pipe(rename({suffix: '-rtl', extname: '.css'}))
        .pipe(gulp.dest('public/assets'));
    done();
});