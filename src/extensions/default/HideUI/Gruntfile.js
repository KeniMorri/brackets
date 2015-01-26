module.exports = function( grunt ) {
  "use strict";
  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    jshint: {
      files: [
        "Gruntfile.js",
        "main.js",
        "package.json"
      ]
    }
  });
};
