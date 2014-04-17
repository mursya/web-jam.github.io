module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        borschik: {
            css: {
                src: ['src/index.css'],
                dest: ['index.css'],
                tech: 'css',
                options: {
                    minimize: grunt.option('target') !== 'dev'
                }
            },

            js: {
                src: ['src/index.js'],
                dest: ['index.js'],
                tech: 'js',
                options: {
                    minimize: grunt.option('target') !== 'dev'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },

                files: {
                    'index.html': 'src/index.html'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-borschik');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', ['borschik', 'htmlmin']);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('start', ['build']);
};
