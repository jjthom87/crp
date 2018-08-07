#!/usr/bin/env node

var argOne = process.argv[2];
var argTwo = process.argv[3];
const { exec } = require('child_process');
const chalk = require('chalk');
const log = console.log;

if(!argOne){
	console.log("--project-name <Enter Project Name>")
} else if (argOne === "--help"){
	console.log("--project-name <Enter Project Name>")
} else if (process.argv.indexOf("--project-name") > -1 && process.argv[process.argv.indexOf("--project-name") + 1]) {
	exec('mkdir ' + argTwo, (err, stdout, stderr) => {
		if (stderr) {
			console.error("Error Creating Project Main Directory: " + stderr)
		    return;
		}
		exec('mkdir ./' + argTwo + '/app ' + argTwo + '/public' , (err, stdout, stderrTwo) => {
			if (stderrTwo) {
				console.error("Error creating main folders: " + stderrTwo)
			    return;
			}
			exec('mkdir ./' + argTwo + '/app/components ' + argTwo + '/public/css '  + argTwo + '/public/images', (err, stdout, stderrThree) => {
				if (stderrTwo) {
					console.error("Error creating subfolders: " + stderrThree)
				    return;
				}
			});
			// log(chalk.red.bold('Loading Node Modules'));
			// exec('cd ./' + argTwo + "/; npm i;", (err, stdout, stderrThree) => {
			// 	if (stderrThree) {
			// 		console.error("Error Loading Node Modules: " + stderrThree)
			// 	    return;
			// 	}
			// 	if(stdout){
			// 		log(chalk.blue.bold('Node Modules Loaded'))
			// 	}
			// });
		});
	});
} else if (process.argv.indexOf("--project-name") > -1 && !argTwo){
	console.log("--project-name <Enter Project Name>")
} else if (process.argv.indexOf("--project-name") == -1){
	console.log("--project-name <Enter Project Name>")
}