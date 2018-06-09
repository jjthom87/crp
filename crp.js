#!/usr/bin/env node

var argOne = process.argv[2];
var argTwo = process.argv[3];
const { exec } = require('child_process');

if(!argOne){
	console.log("Please enter folder name")
} else if (argOne === "--help"){
	console.log("Please enter a folder name as your second argument")
} else {
	exec('mkdir ' + argOne, (err, stdout, stderr) => {
	  if (err) {
	    return;
	  }
	});
}