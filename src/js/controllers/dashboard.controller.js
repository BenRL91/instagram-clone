function DashboardController($scope, $http, SERVER){
  init();

  function init(){
    $http.get(SERVER.URL + "imgstaMurrays").then((response)=> {
      $scope.images = response.data;
    })
  }

  $scope.addLike = (image) => {
    $http.put(SERVER.URL + "imgstaMurrays/" + image._id, {
      likes: ++image.likes
    }).then((response) => {
    })
  }

  $scope.getLikes = (currentLikes) => {
    if(currentLikes > 1 || currentLikes === 0){
      return "Likes"
    }else {
      return "Like"
    }
  }

}

DashboardController.$inject = ["$scope", "$http", "SERVER"];

export { DashboardController };
