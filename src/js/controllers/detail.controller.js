function DetailController ($scope, $http, SERVER, $stateParams, $state){

  init();

  function init(){
    $http.get(SERVER.URL + $stateParams.id).then((response) => {
      console.log(response)
      $scope.image = response.data;
      $scope.boolean = true;
      $scope.hidden = $scope.boolean ? "hidden" : "";
    })
  }

  $scope.submitComment = (comment) => {
    if (comment.body.length > 0){
      $scope.image.comments.push(comment);
      $http.put(SERVER.URL + $scope.image._id, $scope.image).then((response) => {
        console.log(response);
        $scope.comment = {};
        getComments()
      })
    }
  }
  function getCOmments(){
    $http.get(SERVER.URL + $stateParams.id).then((response) => {
      console.log(response)
      $scope.image.comments = response.data.comments;
    })
  }
  $scope.getLikes = (currentLikes) => {
    if(currentLikes > 1 || currentLikes === 0){
      return "Likes";
    }else {
      return "Like";
    }
  }

  $scope.addLike = (image) => {
    $http.put(SERVER.URL + image._id, {
      likes: ++image.likes
    }).then((response) => {
      $scope.getLikes(image.likes);
    })
  }
  $scope.toggleHidden = () => {
    $scope.boolean = !$scope.boolean;
    $scope.hidden = $scope.boolean ? "hidden" : "";
  }

  $scope.deleteImage = (imageID) =>{
    if (window.confirm("Are you sure you want to delete this image?")){
      $http.delete(SERVER.URL + imageID).then((response) => {
        console.log(response);
        $state.go("root.dashboard");
      })
    }
  }
}
DetailController.$inject = ["$scope", "$http", "SERVER", "$stateParams", "$state"];

export { DetailController };
