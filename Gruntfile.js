// ������������ ������
module.exports = function(grunt) {

    // ������
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        // ���������
        concat: {
            main: {
                src: [
					'js/libs/*.js',
                    'js/**/*.js'  // ��� JS-����� � �����
                ],
                dest: 'build/scripts.js'
            }
        },
        // �������
        uglify: {
            main: {
                files: {
                    // ��������� ������ concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    // �������� ��������, ������������� � ������� npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // ������ �� ���������
    grunt.registerTask('default', ['concat', 'uglify']);
};