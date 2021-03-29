install:
	npm install

make lint:
	npx eslint .

publish:
	npm publish --dry-run
	
gendiff:
	node bin/gendiff.js
