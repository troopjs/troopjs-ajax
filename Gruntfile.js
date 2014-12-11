/**
 * @license MIT http://troopjs.mit-license.org/
 */
/*globals module:false*/
module.exports = function(grunt) {
	"use strict";

	// Configure grunt
	grunt.initConfig({
		"pkg": grunt.file.readJSON("bower.json"),

		"build": {
			"src": ".",
			"dist": "dist"
		},

		"requirejs": {
			"options": {
				"mainConfigFile": "require.js",
				"appDir": "<%= build.src %>",
				"dir": "<%= build.dist %>",
				"optimize": "none",
				"optimizeCss": "none",
				"skipDirOptimize": true,
				"keepBuildDir": true,
				"fileExclusionRegExp": /^(?:\.(?!travis|gitignore)|node_modules|test|guides|(?:version|require|Gruntfile)\.js|package\.json)/,
				"rawText": {
					"troopjs-ajax/version": "define([], { 'toString': function () { return <%= JSON.stringify(pkg.version) %>; } });\n"
				}
			},

			"bundles": {
				"options": {
					"modules": [{
						"name": "troopjs-ajax/main",
						"exclude": [
							"jquery",
							"when",
							"poly",
							"mu-merge"
						],
						"excludeShallow": [
							"troopjs-ajax/main"
						]
					}]
				}
			}
		},

		"clean": {
			"dist": ["<%= build.dist %>"]
		},

		"uglify": {
			"options": {
				"report": "min",
				"preserveComments": false
			},
			"bundles": {
				"files": [{
					"expand": true,
					"dest": "<%= build.dist %>",
					"cwd": "<%= build.dist %>",
					"src": ["main.js"],
					"ext": ".min.js"
				}]
			}
		}
	});

	// Load all grunt tasks from package.json
	require("load-grunt-tasks")(grunt);

	grunt.registerTask("compile", [ "requirejs" ]);
	grunt.registerTask("compress", [ "uglify" ]);
	grunt.registerTask("default", [ "compile", "compress" ]);
};
