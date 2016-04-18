(function(angular){
    var app=angular.module('todolist');
    app.controller('MainController',['$scope','$state','$mdSidenav',
                                    function($scope,$state,$mdSidenav){
        $scope.row=false;
        $scope.sideMenu=false;
        $scope.toggleSideMenu=function(){
            $scope.sideMenu=!$scope.sideMenu;
        };
    }])
})(angular);