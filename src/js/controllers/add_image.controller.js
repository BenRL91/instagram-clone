function AddImageController($scope, $http, SERVER, $state){
  init();

  function init(){

  }

  $scope.submitImage = function(imageData){
    imageData.comments = [];
    imageData.likes = 0;
    $http.post(SERVER.URL + "imgstaMurrays", imageData).then((response) => {
      console.log(response);
      $state.go("dashboard")
    })
  }

}

AddImageController.$inject = ["$scope", "$http", "SERVER", "$state"];

export { AddImageController };
