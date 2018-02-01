import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-animate';

import routes from './config/routes';
import MyService from './services/my.service';
import HomeController from './controller/home';

/*@ngInject*/
export default angular
    .module('home', ['ui.router', 'ngAnimate'])
    .config(routes)
    .service('MyService', MyService)
    .controller('HomeController', HomeController)
    .name;
