app.controller('timeLineCtrl',function($scope){
    $scope.$on('setMarkerToTimeLine',function(evt,arg){       
        console.dir(arg);
        var pos = arg.position;
        $scope.position = pos;
        
    });

});
