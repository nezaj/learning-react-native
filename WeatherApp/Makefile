MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

NODE_BIN = node_modules/.bin
NODE = $(NODE_BIN)/babel-node
NODEMON = $(NODE_BIN)/nodemon

.PHONY: lint test

lint:
	@echo "Running eslint..."
	$(NODE_BIN)/eslint --ext .js --ext .jsx src

test:
	@echo "Running tests..."
	$(NODE_BIN)/mocha 'test/**/*.@(js|jsx)'
