# MaquetteGL
## Durand & Amara & Assaoui & Leclercq

## Lancement

Nous avons déployés l'application. Celle-ci peut alors fonctionner de façon autonome,
Pour lancer la maquette depuis un terminal linux disposant du navigateur firefox :
	`cd app`
	`firefox index.html`

## Architecture de la maquette

Les différentes pages se situent dans app/views.
La définitions des routes dans scripts/app.js
Les controllers sont dans scripts/controllers
Les directives sont dans scripts/directives.

## Install

Installation :
    `npm install && bower install`

Make sure to have installed the latest version of nodejs (npm).
Sometime do manual install for :
    `npm install browserslist postcss num2fraction canuise-db`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Commandes du générateur
`npm install -g yo generator-angular`
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

    yo angular (aka angular:app)
    yo angular:controller
    yo angular:directive
    yo angular:filter
    `yo angular:route`
        créer une nouvelle route + un controller + une view
    yo angular:service
    yo angular:provider
    yo angular:factory
    yo angular:value
    yo angular:angular
    yo constant:decorator
    yo angular:view
