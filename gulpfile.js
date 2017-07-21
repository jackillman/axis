var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), // Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),   // очистка директории перед записью
    browserSync = require('browser-sync').create(), // локальный сервер
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');    // отлов ошибок
    

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['frontend/sass/**/*.sass', 'frontend/sass/**/*.scss']) // Берем источник
    .pipe(plumber({
      errorHandler:notify.onError(function(err){
        return {
          title: 'Styles',
          message: err.message
        };  
      })
  }))
    
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('public/css')) // Выгружаем результата в папку css
  });



//gulp.task('assets',function(){
 //   return gulp.src('frontend/assets/**')
 //       .pipe(gulp.dest('public'));
//});

gulp.task('clean', function(){
    return del('public')
})
gulp.task('watch', function() {
  gulp.watch('frontend/sass/*.*', ["sass"]);
   // gulp.watch('frontend/assets/*.*', ["assets"]);// Наблюдение за sass файлами в папке sass
});




gulp.task('serve', function(){
    browserSync.init({
        server:'public'
    });
    
    browserSync.watch('public/**/*.*').on('change', browserSync.reload)
});

gulp.task('default', ['sass', 'serve', 'watch']);
