var gulp = require("gulp"),
	connect = require('gulp-connect-php'),
	browserSync = require('browser-sync'),
	modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
	gulp.src('app/js/*.js')
		.pipe(modernizr(
		{
			//Подключаем необходимые опции
			"options": [
				"setClasses",
				"html5shiv"
			],

			//Подключаем необходимый набор тестов
			"tests" : ['placeholder', 'cddanimations'],

			//Собрать минифицированную версию
			"uglify": true,

			}	
		))

	.pipe(gulp.dest("app/js/vendor"))	
});

gulp.task('connect-sync', function(){ 
  connect.server({}, function (){
    browserSync({   
       proxy: '127.0.0.1:8000'  
    });
  });
});  
 

gulp.task('server', function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: './app'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch([
		'app/*.html',
		'**/*.php',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});
//задача по умолчанию
gulp.task('default', ['modernizr', 'server', 'watch']);