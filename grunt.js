// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
//
// initial reconfiguration for Climate Highlights project just needs to build a minified JS bundle.
module.exports = function(grunt) {

  grunt.initConfig({

    // The clean task ensures all files are removed from the dist/ directory so
    // that no files linger from previous builds.
    clean: ["dist/", "build/"],

    // Drupal version must omit jquery and bootstrap.
    concat: {
      drupal: {
        src: [
          'assets/underscore-min.js',
          'assets/backbone-min.js',
          'assets/moment.min.js',
          'build/ch.js' // minified version of CH javascript, must go last so requirements are declared first
          ],
        dest: "dist/ch.js"
      }
    },

    // Takes the built require.js file and minifies it for filesize benefits.
    min: {
      "build/ch.js": [
        "app/**/*.js"
      ]
    }
  }
  );

  // The release task will minifies then concats the files into dist/
  grunt.registerTask("release", "min concat");

};
