"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const juegos_controllers_1 = require("../controllers/juegos.controllers");
const juegos = new juegos_controllers_1.JuegosController();
const router = (0, express_1.Router)();
//*Definir las rutas
router.get("/", juegos.listadoJuegos);
router.get("/listado", juegos.listadoJuegos);
router.get("/:id", juegos.obtenerJuego);
router.delete("/:id", juegos.eliminarJuego);
router.put("/:id", juegos.actualizarJuego);
router.post("/", juegos.crearJuego);
exports.default = router;
