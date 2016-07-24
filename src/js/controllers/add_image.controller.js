function AddImageController($scope, $http, SERVER, $state){
  init();

  function init(){

  }

  $scope.submitImage = function(imageData){
    imageData.comments = [];
    imageData.likes = 0;
    $http.post(SERVER.URL, imageData).then((response) => {
      console.log(response);
      $state.go("root.dashboard")
    })
  }

}

AddImageController.$inject = ["$scope", "$http", "SERVER", "$state"];

export { AddImageController };
