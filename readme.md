Boardly - The open source kanban
================================

Important Things
----------------

- Simplicity - must be dead simple to use.
- Flexiblity - must not be opinionated. The user is the expert.
- Evolvability - encourage improvement through play.

Features
--------

I can create a new board

I can create a workflow 

I can add a card to the board, it should go into the first stage of the workflow

I can add more more stages to the workflow

I can advance the card through the workflow

I can add more cards

I can move all cards through the workflow

I can see how long it took to move a card through the workflow

I can give a workflow stage a WIP limit

I can see if a workflow stage has exceeded its WIP limit
 
Running tests
-------------

	npm install mocha -g

On windows: .\specs.ps1

On linux: mocha --ui bdd --require should --reporter spec


