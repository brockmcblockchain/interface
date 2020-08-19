.PHONY: run build deploy

run:
	yarn start

deploy:
	yarn build
	firebase deploy
