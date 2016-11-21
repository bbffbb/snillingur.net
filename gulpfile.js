var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css');

    webserver = require('gulp-webserver'),



gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
    .pipe(jshint({
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true,
        node: true,
        undef: true,
        globals: {
            _: false,
            jQuery: false,
            angular: false,
            moment: false,
            console: false,
            $: false,
            io: false,
            document: false
        }
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('css', function () {
    return gulp.src('src/css/**/*.css')
    .pipe(minifyCSS({ compatibility: 'ie8' }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('html', function () {
    gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('libs', function () {
    gulp.src([
      'libs/jquery/dist/jquery.min.js',
      'libs/angular/angular.min.js',
      'libs/angular-sanitize/angular-sanitize.js',
      'libs/angular-touch/angular-touch.min.js',
      'libs/angular-animate/angular-animate.js',
      'libs/angular-aria/angular-aria.min.js',
      'libs/angular-messages/angular-messages.min.js',
      'libs/angular-material/angular-material.js',
      'libs/angular-material/angular-material.min.css',
      'libs/angular-route/angular-route.min.js',
      'libs/bootstrap/dist/css/bootstrap.min.css',
      'libs/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('build/libs'));
});

gulp.task('fonts', function () {
    gulp.src([
      
    ])
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('icons', function() {
    gulp.src([
      
    ])
    .pipe(gulp.dest('build/img/icons'))
})

gulp.task('img', function () {
    gulp.src('src/img/*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('views', function () {
    gulp.src('src/views/*.html')
    .pipe(gulp.dest('build/views'));
});

gulp.task('directives', function () {
    gulp.src('src/js/directives/**/*.html')
    .pipe(gulp.dest('build/directives'));
});



// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/views/*.html', ['views']);
    gulp.watch('src/js/directives/**/*.html', ['directives']);
});

gulp.task('server', function () {
    gulp.src('build')
    .pipe(webserver({
        fallback: 'build/index.html',
        livereload: true,
    }));
});

gulp.task('build', ['js', 'css', 'html', 'libs', 'fonts', 'img', 'views', 'directives']);
gulp.task('default', ['build']);
