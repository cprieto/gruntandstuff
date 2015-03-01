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
		},

		sanitize: {
			files: {
				src: ['output/*']
			}
		},
	});

	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sanitize']);
	grunt.registerTask('hello', 'Sample hello task', function(name) {
		if (!name || !name.length) {
			grunt.fatal("You need to provide a name!");
		}

		grunt.log.write('oh hai ' + name);
	});
}
