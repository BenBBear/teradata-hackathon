

var app = angular.module('app',['ngFx','ui.bootstrap', 'ngAnimate','angularMoment','ui.map']);

// app

    // .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
    //     GoogleMapApi.configure({
    //         key: 'AIzaSyAJY4JKy59pmuN1d8Y5Fx4fRVlOBLvCi3o',
    //         // v: '3.20',
    //         libraries: 'weather,geometry,visualization'
    //     });
    // }]);




app.controller('MapCtrl',function($scope){
    $scope.mapOptions = {
        center: new google.maps.LatLng(35.784, -78.670),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.myMarkers = [];
    $scope.addMarker = function ($event, $params) {
        $scope.myMarkers.push(new google.maps.Marker({
            map: $scope.myMap,
            position: $params[0].latLng
        }));

        $scope.$emit('setMarker',{
            map: $scope.myMap,
            position: $params[0].latLng
        });
    };

    $scope.setZoomMessage = function (zoom) {
        $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
        console.log(zoom, 'zoomed');
    };

    $scope.openMarkerInfo = function (marker) {
        $scope.currentMarker = marker;
        $scope.currentMarkerLat = marker.getPosition().lat();
        $scope.currentMarkerLng = marker.getPosition().lng();
        $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function (marker, lat, lng) {
        marker.setPosition(new google.maps.LatLng(lat, lng));
    };
});

app.controller('mainCtrl',function($scope){
    $scope.app = {
        name:'test',
        version:'0.0.0'
    };
    $scope.$on('setMarker',function(evt,arg){
        $scope.$broadcast('setMarkerToTimeLine',arg);
    });
    
    $scope.random = function(){
        return Math.random()*10;
    };
    
});

app.controller('mainCtrl',function($scope){
    $scope.app = {
        name:'test',
        version:'0.0.0'
    };
    $scope.$on('setMarker',function(evt,arg){
        $scope.$broadcast('setMarkerToTimeLine',arg);
    });
    
    $scope.random = function(){
        return Math.random()*10;
    };
    
});

app.controller('timeLineCtrl',function($scope){
    $scope.$on('setMarkerToTimeLine',function(evt,arg){       
        console.dir(arg);
        var pos = arg.position;
        $scope.position = pos;
        
    });

});
