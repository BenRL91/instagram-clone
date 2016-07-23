function config($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("dashboard", {
      url: "/",
      templateUrl: "templates/dashboard.tpl.html",
      controller: "DashBoardCtrl"
    })
    .state("add", {
      url: "/add",
      templateUrl: "templates/add_image.tpl.html",
      controller: "AddImageCtrl"
    })

    $urlRouterProvider.otherwise("/")
}

export { config }
