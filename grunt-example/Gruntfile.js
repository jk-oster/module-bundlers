module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            dist: {
                src: ['src/js/cookiehint.js', 'src/js/responsive-table.js'],
                dest: 'dist/js/main.js',
            },
        },
        terser: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['dist/js/main.js'],
                },
            },
        },
        watch: {
            css: {
                files: 'src/scss/*.scss',
                tasks: ['sass', 'uncss', 'autoprefixer', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: 'src/js/*.js',
                tasks: ['concat', 'terser'],
                options: {
                    livereload: true,
                },
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded',
                    
                },
                files: {                         // Dictionary of files
                    'dist/css/main.css': 'src/scss/main.scss',       // 'destination': 'source'
                },
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }],
            },
        },
        uncss: {
            dist: {
                options: {
                    ignore: ['#added_at_runtime', '.created_by_jQuery']
                },
                files: {
                    'dist/css/tidy.css': ['index.html'],
                },
            },
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'dist/img/',
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    'last 3 versions',
                    'ie >= 9',
                    'Android >= 2.3',
                    'ChromeAndroid > 20',
                    'FirefoxAndroid > 20',
                    'iOS >= 8',
                ],
                diff: true,
            },
            dist:{
                files:{
                    'dist/css/main.css':'dist/css/main.css'
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-terser');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass', 'uncss', 'autoprefixer', 'cssmin', 'concat', 'terser']);
};