function DashboardController($scope, $http, SERVER){
  init();

  function init(){
    $http.get(SERVER.URL + "imgstaMurrays").then((response)=> {
      console.log(response);
      $scope.images = response.data;
    })
  }

}

DashboardController.$inject = ["$scope", "$http", "SERVER"];

export { DashboardController };
