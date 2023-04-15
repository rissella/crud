"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = void 0;
var _express = require("express");
const Route = (0, _express.Router)();
//endpoint
exports.Route = Route;
Route.get('/', function (req, res) {
  res.json({
    mensaje: "hola curso backend",
    error: false
  });
});