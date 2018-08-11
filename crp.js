#!/usr/bin/env node

var argOne = process.argv[2];
var argTwo = process.argv[3];
const { exec } = require('child_process');
const { spawn } = require('child_process');
const chalk = require('chalk');
const log = console.log;

if(!argOne){
	console.log("--project-name <Enter Project Name>")
	console.log("--run <Project Name>")
} else if (argOne === "--help"){
	console.log("--project-name <Enter Project Name>")
	console.log("--run <Project Name>")
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
				exec('touch ./' + argTwo + '/public/index.html', (err, stdout, stderrFour) => {
					if (stderrTwo) {
						console.error("Error creating index.html: " + stderrFour)
					    return;
					}
					exec('echo "<!DOCTYPE html>\n<html lang=\'en\'>\n<head>\n    <meta charset=\'UTF-8\'>\n    <title>React Routing Example</title>\n    <link rel=\'stylesheet\' href=\'/css/style.css\' />\n</head>\n<body>\n    <div id=\'app\'></div>\n    <script src=\'./bundle/bundle.js\'></script>\n</body>\n</html>" >> ./' + argTwo + '/public/index.html', (err, stdout, stderrFive) => {
						if (stderrTwo) {
							console.error("Error writing index.html: " + stderrFive)
						    return;
						}
					});
				});
				exec('touch ./' + argTwo + '/public/css/style.css', (err, stdout, stderrSix) => {
					if (stderrTwo) {
						console.error("Error creating style.css: " + stderrSix)
					    return;
					}
					exec('echo "h1 { color: blue; }" >> ./' + argTwo + '/public/css/style.css', (err, stdout, stderrSeven) => {
						if (stderrTwo) {
							console.error("Error writing style.css: " + stderrSeven)
						    return;
						}
					});
				});
				exec('touch ./' + argTwo + '/app/app.js', (err, stdout, stderrEight) => {
					if (stderrTwo) {
						console.error("Error creating app.js: " + stderrEight)
					    return;
					}
					exec('echo "import React from \'react\';\nimport { render } from \'react-dom\';\nimport { BrowserRouter } from \'react-router-dom\';\nimport routes from \'./routes.js\';\n\nrender(\n    <BrowserRouter>{routes}</BrowserRouter>,\n    document.getElementById(\'app\')\n);" >> ./' + argTwo + '/app/app.js', (err, stdout, stderNine) => {
						if (stderrTwo) {
							console.error("Error writing app.js: " + stderrNine)
						    return;
						}
					});
				});
				exec('touch ./' + argTwo + '/app/routes.js', (err, stdout, stderrTen) => {
					if (stderrTwo) {
						console.error("Error creating routes.js: " + stderrTen)
					    return;
					}
					exec('echo "import React from \'react\';\nimport { Switch, Route } from \'react-router-dom\';\nimport Home from \'./components/Home\';\n\nexport default (\n    <Switch>\n        <Route exact path=\'/\' component={Home} />\n    </Switch>\n);" >> ./' + argTwo + '/app/routes.js', (err, stdout, stderEleven) => {
						if (stderrTwo) {
							console.error("Error writing routes.js: " + stderrEleven)
						    return;
						}
					});
				});
				exec('touch ./' + argTwo + '/app/components/Home.js', (err, stdout, stderrTen) => {
					if (stderrTwo) {
						console.error("Error creating Home.js: " + stderrTen)
					    return;
					}
					exec('echo "import React, {Component} from \'react\';\n\nexport default class Home extends Component {\n  render() {\n    return (\n      <div>\n        <h1>Hello World</h1>\n      </div>\n    );\n  }\n};" >> ./' + argTwo + '/app/components/Home.js', (err, stdout, stderEleven) => {
						if (stderrTwo) {
							console.error("Error writing Home.js: " + stderrEleven)
						    return;
						}
					});
				});
			});
		});
		exec('touch ./' + argTwo + '/package.json', (err, stdout, stderrFour) => {
			// if (stderrTwo) {
			// 	console.error("Error creating package.json: " + stderrFour)
			//     return;
			// }
			exec("echo '{\n  \"name\": \"create-react-project\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"public/index.html\",\n  \"scripts\": {\n    \"all\": \"node server | webpack -w\",\n    \"start\": \"node server\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.14.0\",\n    \"react\": \"^16.2.0\",\n    \"react-dom\": \"^16.2.0\",\n    \"react-router-dom\": \"^4.2.2\"\n  },\n  \"devDependencies\": {\n    \"babel-core\": \"^6.3.13\",\n    \"babel-loader\": \"^6.2.0\",\n    \"babel-preset-es2015\": \"^6.3.13\",\n    \"babel-preset-react\": \"^6.3.13\"\n  }\n}' >> ./" + argTwo + "/package.json", (err, stdout, stderrFive) => {
				// if (stderrTwo) {
				// 	console.error("Error writing index.html: " + stderrFive)
				//     return;
				// }
			});
		});
		exec('touch ./' + argTwo + '/.gitignore', (err, stdout, gitIgnoreErr) => {
			// if (gitIgnoreErr) {
			// 	console.error("Error creating .gitignore: " + gitIgnoreErr)
			//     return;
			// }
			exec("echo 'node_modules' >> ./" + argTwo + "/.gitignore", (err, stdout, gitIgnoreErr) => {
				// if (gitIgnoreErr) {
				// 	console.error("Error writing index.html: " + stderrFive)
				//     return;
				// }
			});
		});
		exec('touch ./' + argTwo + '/webpack.config.js', (err, stdout, stderrFour) => {
			// if (stderrTwo) {
			// 	console.error("Error creating webpack.config.js: " + stderrFour)
			//     return;
			// }
			exec("echo 'module.exports = {\n  entry: \"./app/app.js\",\n  output: {\n    filename: \"./public/bundle/bundle.js\"\n  },\n  module: {\n    loaders: [\n      {\n        test: /\.jsx?$/,\n        include: /app/,\n        loader: \"babel-loader\",\n        query: {\n          presets: [\"react\", \"es2015\"]\n        }\n      }\n    ]\n  },\n  devtool: \"inline-source-map\"\n};' >> ./" + argTwo + "/webpack.config.js", (err, stdout, stderrFive) => {
				// if (stderrTwo) {
				// 	console.error("Error writing webpack.config.js: " + stderrFive)
				//     return;
				// }
			});
		});
		exec('touch ./' + argTwo + '/server.js', (err, stdout, stderrFour) => {
			// if (stderrTwo) {
			// 	console.error("Error creating server.js: " + stderrFour)
			//     return;
			// }
			exec("echo 'var express = require(\"express\");\nvar path = require(\"path\");\n\nvar app = express();\n\nvar PORT = process.env.PORT || 3000;\n\napp.use(express.static(\"./public\"));\n\napp.get(\"/\", function(req, res) {\n  res.sendFile(path.join(__dirname + \"./public/index.html\"));\n});\n\napp.get(\"*\", function(req, res) {\n  res.sendFile(path.join(__dirname + \"/public/index.html\"));\n});\n\napp.listen(PORT, function() {\n  console.log(\"App listening on PORT: \" + PORT);\n});' >> ./" + argTwo + "/server.js", (err, stdout, stderrFive) => {
				// if (stderrFive) {
				// 	console.error("Error writing server.js: " + stderrFive)
				//     return;
				// }
				log(chalk.red.bold('Loading Node Modules'));
				exec('cd ./' + argTwo + "/; npm i;", (err, stdout, stderrThree) => {
					// if (stderrThree) {
					// 	console.error("Error Loading Node Modules: " + stderrThree)
					//     return;
					// }
					if(stdout){
						log(chalk.blue.bold('Node Modules Loaded'))
					}
				});
			});
		});
	});
} else if (process.argv.indexOf("--project-name") > -1 && !argTwo){
	console.log("--project-name <Enter Project Name>")
} else if (process.argv.indexOf("--project-name") == -1 && process.argv.indexOf("--run") == -1){
	console.log("--project-name <Enter Project Name>")
	console.log("--run <Project Name>")
} else if (process.argv.indexOf("--run") > -1){
	const child = spawn('node', ['server.js']);
	const childTwo = spawn('webpack', ['-w']);
	child.stdout.on('data', function (data) {
	  console.log(data.toString());
	});
	childTwo.stdout.on('data', function (data) {
	  console.log(data.toString());
	});
}