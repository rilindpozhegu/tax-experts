module.exports = function(grunt) {

	// Configure

	grunt.initConfig({
		// pass in options to pluginsm references to files etc...
		concat:{
			js:{
				src:[
					'js/jquery.js',
					'js/bootstrap.min.js', // Boostrap Script.min General,
					'js/scrolling-nav.js', // Scrolling Nav Default Script,

					// Facts Section Number Counter Scripts/All
					'js/waypoints.min.js',
					'js/jquery.counterup.min.js',
					'js/number-c.js', //Time to count,
					// --------------------------------------// 

					// OWL Carousel 2.0 All.
					'js/owl_time.js',
					'js/owl.carousel.js',

					// -------------------// 

					// Animation.css Scripts after scroll
					'js/wow.min.js',
					'js/animate.js',
					// --------------------------------// 

					'js/smoothscroll.js' // Smooth Scroll Script + time to Scroll,

					],

				dest: 'build/scripts.js'
			},
			css: {
				src:['css/**/*.css'],
				dest: 'build/styles.css'
			}
		},
		watch: {
		  scripts: {
		    files: ['css/**/*.css'],
		    tasks: ['concat'],
		    options: {
		      spawn: false,
		    },
		  },
		},

	});


	//  Load Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks

	grunt.registerTask('default', ['watch']);
	// grunt.registerTask('concat-css', ['concat:css']);


};