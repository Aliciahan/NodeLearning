#Grunt

~~~bash
sudo npm install -g grunt-cli
npm install --save-dev grunt

npm install --save-dev grunt-cafe-mochanpm install --save-dev grunt-contrib-jshintnpm install --save-dev grunt-exec
~~~

at root floder : Gruntfile.js: 

~~~js
module.exports = funtion(grunt){
	//plug-ins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	// plugins configuration
	grunt.initConfig({
		cafemocha:{
			all:{src:'qa/test-*.js', option:{ui:'tdd'},}
		},
		jshint: {
			app:['meadowlard.js', 'public/js/**/*.js', 'lib/**/*.js'],
			qa: ['Grunfile.js', 'public/qa/**/*.js', 'qa/**/*.js'], 
		},
		exec: {
			linkchecker:
				{cmd: 'linkchecker http://localhost:3000'}
		},
	});

	//enregistrement task 
	grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
~~~
