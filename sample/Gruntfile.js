module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: ['index.js', 'another.js'],
				dest: 'output/build.js'
			}
		},

		uglify: {
			build: {
				src: 'output/build.js',
				dest: 'output/build.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
}
