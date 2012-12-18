// When grunt 0.4 is released, this will become a CoffeeScript file (Gruntfile.coffee).

module.exports = function (grunt) {

	grunt.initConfig({

		meta: {
			banner: '// ' + grunt.file.read('LICENSE').split('\n')[0]
		},

		coffee: {
			compile: {
				files: {
					'lib/struct.js': 'lib/struct.coffee',
					'spec/spec.js': 'spec/spec.coffee'
				}
			}
		},

		concat: {
			dist: {
				lib: ['<banner>', 'lib/struct.js'],
				dest: 'lib/struct.js'
			}
		},

		watch: {
			files: ['lib/struct.coffee', 'spec/spec.coffee'],
			tasks: 'coffee'
		}

	})

	grunt.loadNpmTasks('grunt-contrib-coffee')

	grunt.registerTask('dev', 'coffee')
	grunt.registerTask('release', 'coffee concat')
	grunt.registerTask('default', 'release')

}