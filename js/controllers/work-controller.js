app.controller('WorkController', ['$scope', '$location', '$anchorScroll',function($scope, $location, $anchorScroll){
    $scope.goToInterframe = function() {
        $location.hash('interframe-space');
        $anchorScroll();
    };

    $scope.goToContention = function() {
        $location.hash('contention-window');
        $anchorScroll();
    };

    $scope.goToAcknowledgement = function() {
        $location.hash('acknowledgement');
        $anchorScroll();
    };

}]);
