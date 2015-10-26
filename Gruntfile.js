module.exports = function (grunt) {

	grunt.initConfig({
		coffee: {
			compile: {
				files: {
					'lib/strukt.js': 'lib/strukt.coffee',
					'spec/spec.js': 'spec/spec.coffee'
				}
			}
		},

		concat: {
			options: {
				stripBanners: true,
				banner: '// ' + grunt.file.read('LICENSE').split('\n')[0] + '\n'
			},
			dist: {
				src: ['lib/strukt.js'],
				dest: 'lib/strukt.js'
			}
		},

		mocha: {
			all: {
				src: 'spec/index.html',
				run: true
			}
		},

		watch: {
			files: ['lib/strukt.coffee', 'spec/spec.coffee'],
			tasks: 'coffee'
		}

	})

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('dev', 'coffee');
	grunt.registerTask('test', 'mocha');
	grunt.registerTask('release', ['coffee', 'mocha', 'concat']);
	grunt.registerTask('default', 'release');

}
