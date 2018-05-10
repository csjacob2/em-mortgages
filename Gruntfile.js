module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            development: {
                files: {
                    'css/styles.css' : 'css/_styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
};