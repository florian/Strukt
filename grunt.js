// When grunt 0.4 is released, this will become a CoffeeScript file (Gruntfile.coffee).

module.exports = function (grunt) {

	grunt.initConfig({

		meta: {
			banner: '// ' + grunt.file.read('LICENSE').split('\n')[0]
		},

		coffee: {
			compile: {
				files: {
					'lib/strukt.js': 'lib/strukt.coffee',
					'spec/spec.js': 'spec/spec.coffee'
				}
			}
		},

		concat: {
			dist: {
				lib: ['<banner>', 'lib/strukt.js'],
				dest: 'lib/strukt.js'
			}
		},

		watch: {
			files: ['lib/strukt.coffee', 'spec/spec.coffee'],
			tasks: 'coffee'
		}

	})

	grunt.loadNpmTasks('grunt-contrib-coffee')

	grunt.registerTask('default', 'release')
	grunt.registerTask('release', 'coffee concat')
	grunt.registerTask('dev', 'coffee')

}