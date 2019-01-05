module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'src/css/styles.css' : 'src/scss/styles.scss'
				}
			}
		},
		autoprefixer:{
			dist:{
				files:{
					'src/css/styles.css' : 'src/scss/styles.scss'
				}
			},
			options: {
				browsers: [
				  "Android 2.3",
				  "Android >= 4",
				  "Chrome >= 20",
				  "Firefox >= 24",
				  "Explorer >= 8",
				  "iOS >= 6",
				  "Opera >= 12",
				  "Safari >= 6"
				]
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}