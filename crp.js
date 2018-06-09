#!/usr/bin/env node

var argOne = process.argv[2];
var argTwo = process.argv[3];
const { exec } = require('child_process');

console.log(process.argv)

if(!argOne){
	console.log("--project-name <Enter Project Name>")
} else if (argOne === "--help"){
	console.log("--project-name <Enter Project Name>")
} else if (argOne === "--project-name" && argTwo) {
	exec('mkdir ' + argTwo, (err, stdout, stderr) => {
		if (err) {
		    return;
		}
		exec('mkdir ' + argTwo + "/server", (err, stdout, stderr) => {
			if (err) {
			    return;
			}
			exec('mkdir ' + argTwo + "/server/controller", (err, stdout, stderr) => {
				if (err) {
				    return;
				}
				exec('touch ' + argTwo + "/server/controller/route_controller.js", (err, stdout, stderr) => {
					if (err) {
					    return;
					}
				});
			});
			exec('touch ' + argTwo + "/server/server.js", (err, stdout, stderr) => {
				if (err) {
				    return;
				}
			});
		});
		exec('mkdir ' + argTwo + "/client", (err, stdout, stderr) => {
			if (err) {
			    return;
			}
		});
	});
} else if (argOne === "--project-name" && !argTwo){
	console.log("--project-name <Enter Project Name>")
}