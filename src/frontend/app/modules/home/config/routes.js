/*@ngInject*/
export default ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('../view/home.html'),
            controller: 'HomeController',
            controllerAs: 'home',
            resolve: {
                title: /*@ngInject*/ MyService => MyService.example(),
            }
        });
};
