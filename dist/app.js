"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./config/server");
console.log("Inicio de la app");
const server = new server_1.Server();
server.runApp();
