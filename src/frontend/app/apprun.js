/*@ngInject*/
export default function ($rootScope, $transitions, $timeout) {
    $transitions.onStart({}, (transition) => {
        if (transition.$to().name !== transition.$from().name) {
            $rootScope.loadingView = true;
        }
    });

    $transitions.onSuccess({}, () => {
        $timeout(() => $rootScope.loadingView = false, 2000);
    });

    $transitions.onError({}, () => {
        $timeout(() => $rootScope.loadingView = false, 2000);
    });
}
