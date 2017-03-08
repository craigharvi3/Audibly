install:
	echo Installing node modules. Please wait...
	npm install

serve: 
	echo Starting server. Please wait...
	node_modules/gulp/bin/gulp.js serve
	
dev:
	echo Building assets. Watching will begin shortly after.
	node_modules/gulp/bin/gulp.js dev

deploy:
	echo Building assets. Please wait...
	node_modules/gulp/bin/gulp.js deploy

jsdocs:
	node_modules/.bin/jsdoc src/js -r -c configs/jsdocs.json -d jsdocs