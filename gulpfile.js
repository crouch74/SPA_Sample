var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rimraf = require('gulp-rimraf');
var ngHtml2js = require('gulp-ng-html2js');
var webserver = require('gulp-webserver');


var paths = {
  style:[
    'src/app/styles/*.css'
  ],
  libs:[
    'bower_components/angular/angular.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js'
  ],
  app : [
    'src/app/app.module.js',
    'src/app/**/*.module.js',
    'src/app/**/*.js'
  ],
  templates : ['src/app/**/*.html'],
  index : ['src/index.html'],
  build :'build/'
};

gulp.task('clean', function(cb) {
  rimraf('./build', cb);
});

gulp.task('copy:index',function(){
  gulp
    .src(paths.index,{
        base: './src/'
      })
    .pipe(gulp.dest(paths.build))
});

gulp.task('copy:templates',function(){
  gulp
    .src(paths.templates,{
        base: './src/'
      })
    .pipe(ngHtml2js({
      prefix: 'templates/',
      moduleName: 'app',
      declareModule: false
    }))
    .pipe(uglify())
    .pipe(concat('app.template.min.js'))
    .pipe(gulp.dest(paths.build + 'js/'))
});

gulp.task('copy:libs',function(){
  gulp
    .src(paths.libs,{
        base: './src/'
    })
    .pipe(uglify())
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest(paths.build + 'js/'))
});

gulp.task('copy:style',function(){
  gulp
    .src(paths.style,{
        base: './src/'
    })
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(paths.build))
});

gulp.task('copy:app',function(){
  gulp
    .src(paths.app,{
      base:'./src/'
    })
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(paths.build + 'js/'));
});

gulp.task('build',['clean','copy:libs','copy:app','copy:style','copy:templates','copy:index']);

gulp.task('server', ['build'], function() {
  gulp.src('./build')
    .pipe(webserver({
      port: 8080,
      host: 'localhost',
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['server'], function() {
  //watch css
  gulp.watch(paths.styles,["copy:style"])

  // Watch JavaScript
  gulp.watch(paths.libs, ['copy:libs']);

  // Watch app templates
  gulp.watch(paths.templates, ['copy:templates']);

  //Watch index.html
  gulp.watch(paths.index, ['copy:index']);

  //watch app
  gulp.watch(paths.app,['copy:app'])

});
