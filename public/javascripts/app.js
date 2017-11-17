angular.module('rsvp', [])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.showResponses = false;
  $scope.responses = [];

  $http.get("/responses").success(function(data){
    angular.copy(data.responses, $scope.responses);
  })

  $scope.addResponse = function(){
    var response = {
      name: $scope.name,
      count: $scope.count
    };

    $http.post('/responses', response).success(function(data){
      $scope.submitted = true;
    });
  }

  $scope.toggleResponses = function(){
    $scope.showResponses = !$scope.showResponses;
  }
}]);
