"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = require("./user.routes");
var routes = express_1.Router();
routes.use("/user", user_routes_1.userRouter);
exports.default = routes;
