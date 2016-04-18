(function(angular){
	var app = angular.module('todolist');
	app.controller('CalendarController', function($scope,$filter,$mdSidenav){
        $scope.selectedDate = null;
        $scope.dayClick = function(date){
            $scope.msg =  $filter("date")(date,'dd MM yy');
            ui-sref="site";
            console.log($scope.msg);
        };
	});

})(angular);