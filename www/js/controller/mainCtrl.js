app.controller('mainCtrl',function($scope){
    $scope.app = {
        name:'test',
        version:'0.0.0'
    };
    $scope.$on('setMarker',function(evt,arg){
        $scope.$broadcast('setMarkerToTimeLine',arg);
    });
    
});
