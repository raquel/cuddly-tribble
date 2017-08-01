import * as singleSpa from 'single-spa';

//                              app-name            load function                         verify if app is active
singleSpa.declareChildApplication('navbar', () => System.import('./apps/navbar/navbar.app.js'), () => true);
singleSpa.declareChildApplication('home', () => System.import('./apps/home/home.app.js'), () => location.hash === "" || location.hash === "#");
singleSpa.declareChildApplication('angularjs', () => System.import('./apps/angularjs/angularjs.app.js'), hashPrefix('/angularjs'));
singleSpa.declareChildApplication('react', () => System.import('./apps/react/react.app.js'), hashPrefix('/react'));
singleSpa.declareChildApplication('angular2', () => System.import('./apps/angular2/angular2.app.js'), hashPrefix('/angular2'));

singleSpa.start();

function hashPrefix(prefix) {
    return function() {
        return window.location.hash.indexOf(`#${prefix}`) === 0;
    }
}
