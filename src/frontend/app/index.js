import angular from 'angular';
import 'angular-animate';
import '@uirouter/angularjs';

import apprun from './apprun';
import routing from './config';
import home from './modules/home';

/*@ngInject*/
angular
    .module('my-app', ['ui.router', 'ngAnimate', home])
    .config(routing)
    .run(apprun);
