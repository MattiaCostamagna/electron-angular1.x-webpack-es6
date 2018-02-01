/*@ngInject*/
export default function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/home');
}
