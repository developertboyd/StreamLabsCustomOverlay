/**
 * @memberof PPG
 * @ngdoc controller
 * @name homeCtrl
 * @param $scope {service} controller scope
 */
angular.module('app').controller('homeCtrl', function (eventFactory) {
    donationListener(function () {
        console.log('We in it bitch');
    });
});
