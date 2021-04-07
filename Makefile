install:
	npm install

make lint:
	npx eslint .

publish:
	npm publish --dry-run
	
gendiff:
	node bin/gendiff.js

filepath1.json:
	node src/read.js


	
