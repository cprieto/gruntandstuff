module.exports = function(grunt) {

	var mozjpeg = require('imagemin-mozjpeg');

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
		},

		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 7,
					use: [mozjpeg()]
				},	
				files: [{
					expand: true,
					cwd: 'images/',
					dest: "output/",
					src: ['**/*.JPG']
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	//grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

	grunt.registerTask('default', 'Sample description', function() {
		console.log('oh hai!');	
	})
}
