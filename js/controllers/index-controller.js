app.controller('IndexController',['$scope', function($scope){
    $scope.activate = function($event){
        var items = $('#cssmenu li');
        items.removeClass('active');

        if ($event.target.nodeName === 'A') {
            $($event.target).parent().addClass('active');
        } else {
            $($event.target).addClass('active');
        }
    };
}]);