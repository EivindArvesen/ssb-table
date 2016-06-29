module.exports = function(grunt) {
  grunt.initConfig({
    bspkg: grunt.file.readJSON('bower_components/bootstrap/package.json'),
    bspath: 'bower_components/bootstrap',
    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'main.css.map',
          sourceMapFilename: 'main.css.map',
          paths: '<%= bspath %>/less'
        },
        files: {
          'main.css': 'main.less'
        },
      }

    },
    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'main.css'
      }
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      core: {
        files: {
          'main.min.css': 'main.css'
        }
      }
    },
    uglify: {
        build: {
            files: {
                'main.min.js': ['main.js']
            }
        }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                        '*.min.css',
                        '*.min.js',
                        'index.html'
                    ]
            },
            options: {
                watchTask: true,
                //proxy: 'localhost'
                server: {
                  baseDir: "./"
              }
            }
        }
    },
    htmlhint: {
      src: '*.html'
    },
    watch: {
        configFiles: {
          files: [ 'Gruntfile.js', 'config/*.js' ],
          options: {
            reload: true
          }
        },
        html: {
            files: ['index.html'],
            tasks: ['htmlhint']
        },
        js: {
            files: ['main.js'],
            tasks: ['uglify']
        },
        less: {
            files: ['main.less'],
            tasks: ['less', 'cssmin'],
        },
    }
  });

  // Loading our grunt modules
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('production', ['less:compileCore', 'autoprefixer', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['less:compileCore', 'autoprefixer', 'cssmin', 'htmlhint', 'uglify', 'browserSync', 'watch']);
  // grunt.registerTask('test', ['jshint', 'qunit']);
};
