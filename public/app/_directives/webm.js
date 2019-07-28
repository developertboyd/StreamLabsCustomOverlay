angular.module('app').directive('webm', function () {
    return {
        restrict: 'E',
        scope: {
            videoURL: '@url',
            height: '@',
            width: '@'
        },
        template: '<video ng-src="{{videoURL | trustUrl}}" autoplay="autoplay" loop="loop">Your browser does not support the video tag.</video>\n'
    };
});
