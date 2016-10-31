angular.module("devmtnTravel").controller("packagesCtrl", function($scope, mainSrv, $stateParams){
  $scope.packagedeals = mainSrv.travelInfo;

});
