Boardly - The open source kanban
================================

Important Things
----------------

- Simplicity - must be dead simple to use.
- Flexiblity - must not be opinionated. The user is the expert.
- Evolvability - encourage improvement through play.

Features
--------

- I can create a new board

- TODO: I can create a workflow 

- TODO: I can add a card to the board, it should go into the first stage of the workflow

- TODO: I can add more more stages to the workflow

- TODO: I can advance the card through the workflow

- TODO: I can add more cards

- TODO: I can move all cards through the workflow

- TODO: I can get back to my board

- TODO: I can see how long it took to move a card through the workflow

- TODO: I can give a workflow stage a WIP limit

- TODO: I can see if a workflow stage has exceeded its WIP limit

 
Running tests
-------------

	npm install mocha -g

On windows: 

	.\specs.ps1

On linux: 

	for f in ls ./specs/*.spec.js
	do
		mocha --ui bdd --require should --reporter spec $f
	done


Building Client API
-------------------
To compile the client app package, ensure that .\client\package.json is up-to-date. The run the ender build.

On windows:

	.\build.ps1

On linux:

	ender build .\client --output ./public/scripts/ender.js
	ender info --use ./public/scripts/ender.js


Deployment
----------

Add psycho-mantis.no.de to ~/.ssh/config
	
	git remote add psycho-mantis.no.de psycho-mantis.no.de:repo
	git push psycho-mantis.no.de master