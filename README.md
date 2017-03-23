project_root_dir$ mkdir src			(* react, jsx, es6 code *)

project_root_dir$ mkdir dist		(* transpiled browser ready files *)


INIT NPM MANAGER

project_root_dir$ npm init


INSTALL BABEL-CLI TOOLS FOR COMMAND LINE TRANSPILASHION

project_root_dir$ sudo npm install --save-dev babel-cli


DOWNLOAD AND INSTALL BABEL PRESETS

project_root_dir$ touch .babelrc	(* all we want to transpile using babel *)

	{ 'presets': ['latest', 'react', 'stage-0'] }
	
project_root_dir$ sudo npm install --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0


TRANSPILE WITH WEBPACK

project_root_dir$ touch webpack.config.js

project_root_dir$ sudo npm install webpack babel-loader webpack-dev-server --save-dev


RUN NPM MANAGER

package.json$ "scripts": { "start": "./node_modules/.bin/webpack && ./node_modules/.bin/webpack-dev-server" },

project_root_dir$ npm start
