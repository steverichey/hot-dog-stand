// note that these settings are largely copied for gulp also
module.exports = function(grunt) {
  // configure project for HDS
  grunt.initConfig({
    // load HDS NodeJS package
    pkg: grunt.file.readJSON('package.json'),
    // configure CSSLint task
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['src/*.css']
      }
    },
    // configure copy task
    copy: {
      dist: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: ['src/**'],
        dest: 'dist/'
      }
    },
    // configure CSSMin task
    cssmin: {
        dist: {
          banner: '/*Hot Dog Stand v0.1.0 https://github.com/steverichey/hot-dog-stand MIT*/',
          files: [{
            src: ['dist/hotdogstand.css'],
            dest: 'dist/hotdogstand.min.css'
          }]
        }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task
  grunt.registerTask('default', ['csslint', 'copy', 'cssmin']);
};
