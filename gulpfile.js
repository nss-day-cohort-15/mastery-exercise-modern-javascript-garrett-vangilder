
var gulp = require('gulp');

var jasmine = require('gulp-jasmine'),
    concat = require('gulp-concat');

gulp.task('concatScripts', function() {
  return gulp.src(['js/classes.js',
                   'js/creation.js',
                   'js/domInteraction.js'])
             .pipe(concat('app.js'))
             .pipe(gulp.dest('js'))
})

// gulp.task('test', () =>
//     gulp.src('spec/test.js')
//         // gulp-jasmine works on filepaths so you can't have any plugins before it
//         .pipe(jasmine())
// );
