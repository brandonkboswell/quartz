module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        shell: {
            command: ["npm install bower", "bower install angular", "bower install angularjs", "bower install bootstrap", "bower install jquery", "bower install tether"].join('&&')
        }
    });
    grunt.registerTask('default', ['shell']);
};

grunt.loadNpmTasks('grunt-contrib-watch');

    watch: {
      md: {
        files: ['~/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/bkb/*'],
        tasks: ['sass:dev']
      }
    }