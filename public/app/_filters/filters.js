angular.module('app').filter("trustUrl", function ($sce) {
    return function (Url) {
        console.log(Url);
        return $sce.trustAsResourceUrl(Url);
    };
});
