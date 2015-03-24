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
        src: ['css/*.css']
      }
    }
  });

  // load CSSLint task
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Default task using CSSLint
  grunt.registerTask('default', ['csslint']);
};
