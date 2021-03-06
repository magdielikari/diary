(function(angular){
    var app=angular.module('todolist',['ui.router','LocalStorageModule','ngMaterial','ngSanitize','materialCalendar','ngMessages']);
    app.config(['$stateProvider','$urlRouterProvider','$mdThemingProvider', 
                function($stateProvider,$urlRouterProvider,$mdThemingProvider){       
                    $mdThemingProvider.theme('default')
                        .primaryPalette('teal',{
                            'default':'500'
                    })
                        .accentPalette('light-green',{
                        'default':'500'
                    })
                        .warnPalette('lime',{
                        'default':'500'
                    });
                
    $urlRouterProvider.otherwise('/');
                    
    $stateProvider.state('site',{
        url:'/',
        views:{
            '@':{
                templateUrl:'views/layout/index.html',
                controller:'MainController'
            },
            'main@site':{
                templateUrl:'views/site/index.html',
                controller:'SiteController'
            }
        }
    });
   $stateProvider.state('list',{
        url:'/list',
        views:{
            '@':{
                templateUrl:'views/layout/index.html',
                controller:'MainController'
            },
            'main@list':{
                templateUrl:'views/list/index.html',
                controller:'ListController'
            }
        }
    });
   $stateProvider.state('calendar',{
        url:'/calendar',
        views:{
            '@':{
                templateUrl:'views/layout/index.html',
                controller:'MainController'
            },
            'main@calendar':{
                templateUrl:'views/calendar/index.html',
                controller:'CalendarController'
            }
        }
    });
    }]);
})(angular);