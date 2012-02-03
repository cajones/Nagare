ls specs/*.spec.js |% {
	. mocha --ui bdd --require should --reporter spec $_	
}
