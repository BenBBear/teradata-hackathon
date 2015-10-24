app.controller('timeLineCtrl',function($scope){
    $scope.$on('setMarkerToTimeLine',function(evt,arg){
        alert('You set Marker At'+arg);
        console.dir(arg);
    });
});
