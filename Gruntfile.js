'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg : grunt.file.readJSON('package.json'),

		concat : {
			options : {
				// separator : ';',
			},
			dist : {
			},
		},
		copy : {
			main : {

			},
			deploy : {
			}
		},
		uglify : {
			options : {},
			dist : {
				files : {
					"dist/owl.carousel.min.js" : [ "dist/owl.carousel.js" ],
				},
			},
		},
		cssmin : {
			combine : {
				files : {}
			}
		},

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', [ 'copy:main', 'concat', 'uglify', 'cssmin', 'copy:deploy' ]);

};
