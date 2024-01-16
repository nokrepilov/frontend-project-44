install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/games/brain-calc.js

publish: #чтобы не засорять общее хранилище учебными пакетами
	npm publish --dry-run

test:
	npm test

lint:
	npx eslint .

.PHONY: test
