angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv, $stateParams){



function looper(){
  for(var i = 0; i < mainSrv.travelInfo.length; i++){
    console.log(mainSrv.travelInfo[i]);
    console.log($stateParams.id);
    if($stateParams.id == mainSrv.travelInfo[i].id){
      console.log($scope.currentCity);
      $scope.currentCity = mainSrv.travelInfo[i];
    }

}
}
looper();



});
