module.exports = function(grunt) {

  // Plugin configuration
  grunt.initConfig({
    jshint: {
      all: {
        src: ['./**/*.js', '!./dist/app.js', '!./node_modules/**/*', '!./bower_components/**/*', '!./Gruntfile.js'],
        options: {
          jshintrc: true
        }
      }
    },
    stylelint: {
      all: {
        src: ['./**/*.css', '!./node_modules/**/*', '!./bower_components/**/*']
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['./**/*.js', '!./dist/app.js','!./node_modules/**/*', '!./bower_components/**/*'],
        tasks: 'jshint'
      },
      css: {
        files: ['./**/*.css', '!./node_modules/**/*', '!./bower_components/**/*'],
        tasks: ['stylelint']
      },
      json: {
        files: ['./**/*.json', '!./node_modules/**/*', '!./bower_components/**/*'],
        tasks: ['jsonlint']
      }
    },
    jsonlint: {
      all: {
        src: ['./**/*.json', '!./node_modules/**/*', '!./bower_components/**/*'],
        options: {
          format: true,
          indent: 2
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['watch']);
};
