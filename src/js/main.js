// Import Librares and Tools //
import angular from "angular";
import "angular-ui-router";

// Import Controllers //
import { DashboardController } from "./controllers/dashboard.controller";
import { AddImageController } from "./controllers/add_image.controller";
import { DetailController } from "./controllers/detail.controller";

// Import Constants //
import { SERVER } from "./constants/server.constant";

// Import Config //
import { config } from "./config";

angular
 .module("app", ["ui.router"])
 .config(config)
 .constant("SERVER", SERVER)
 .controller("DashBoardCtrl", DashboardController)
 .controller("AddImageCtrl", AddImageController)
 .controller("DetailCtrl", DetailController)
