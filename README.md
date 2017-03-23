project_root_dir$ mkdir src			(* react, jsx, es6 code *)

project_root_dir$ mkdir dist		(* transpiled browser ready files *)


LOCAL FILESERVER

project_root_dir$ sudo npm install -g httpster

project_root_dir$ httpster -d ./dist -p 3000


INIT NPM MANAGER

project_root_dir$ npm init


INSTALL BABEL-CLI TOOLS FOR COMMAND LINE TRANSPILASHION

project_root_dir$ sudo npm install --save-dev babel-cli


DOWNLOAD AND INSTALL BABEL PRESETS

project_root_dir$ touch .babelrc	(* all we want to transpile using babel *)

	{ 'presets': ['latest', 'react', 'stage-0'] }
	
project_root_dir$ sudo npm install --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0


TRANSPILE MANUALLY WITH BABEL

project_root_dir$ babel ./src/index.js --out-file ./dist/bundle.js
