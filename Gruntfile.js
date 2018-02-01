module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            webpack_dev: {
                cmd: 'npm run webpack-dev'
            },
            webpack_prd: {
                cmd: 'npm run webpack-prd'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    html5: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/frontend/index.html'
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['exec:webpack_dev', 'htmlmin']
            },
            index: {
                files: 'src/frontend/index.html',
                tasks: ['htmlmin']
            },
            webpack: {
                files: ['src/**/*.*', 'webpack.config.js', '!src/frontend/index.html'],
                tasks: ['exec:webpack_dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['exec:webpack_dev', 'htmlmin']);
    grunt.registerTask('prd', ['exec:webpack_prd', 'htmlmin']);
};
