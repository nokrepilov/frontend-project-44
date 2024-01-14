install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish: #чтобы не засорять общее хранилище учебными пакетами
	npm publish --dry-run

test:
	npm test

lint:
	npx eslint .

.PHONY: test