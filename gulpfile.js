// gulpfile.js

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var sources = {
  code: ['src/**/*.js', 'src/**/*.jsx']
};

gulp.task('build', function () {
  browserify({
    entries: 'src/main.js',
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(sources.code, ['build']);
});

gulp.task('default', ['build']);
