(function(angular,swal){
    var app = angular.module("todolist");
    app.controller("ListController",['$scope','localStorageService',
                                     function($scope, localStorageService){
		if(localStorageService.get("angular-todolist")){
            $scope.todo=localStorageService.get("angular-todolist");
        }else{
            $scope.todo=[];
        }
        /*var horas=[0];
        var minutos=[0];
        for(i=1;i<60;i++){
            if(i<24){horas.push(i);}
            minutos.push(i);
        }  
        $scope.horas=horas;
        $scope.minutos=minutos;*/
        $scope.$watchCollection('todo',function(newValue,oldValue){
            localStorageService.set("angular-todolist",$scope.todo);
        });
        $scope.addActv=function(){
            $scope.todo.push($scope.newActv);
            $scope.newActv={};
        };
        $scope.clear=function(){
            swal({   
                title: "Are you sure?",   
                text: "You will not be able to recover this imaginary file!",  
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Yes, delete it!",  
                closeOnConfirm: false }, 
                function(){  
                    $scope.todo=[];
                    $scope.$apply();
                    swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
            });
        };
    }]);
})(angular,swal);