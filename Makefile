install:
	npm ci

brain-games:
	node bin/brain-games.js

publish: #чтобы не засорять общее хранилище учебными пакетами
	npm publish --dry-run

test:
	npm test

.PHONY: test
