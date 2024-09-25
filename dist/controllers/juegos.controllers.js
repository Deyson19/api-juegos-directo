"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegosController = void 0;
const juegosModel_1 = __importDefault(require("../models/juegosModel"));
class JuegosController {
    //*Listado de juegos
    listadoJuegos(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const juegos = yield juegosModel_1.default.find();
                resp.status(200).json({
                    message: juegos.length > 0
                        ? "Listado de juegos"
                        : "No hay juegos para mostrar",
                    juegos,
                });
            }
            catch (error) {
                console.log("Error al obtener el listado", error);
                resp.status(500).json({ message: "Error al obtener el listado" });
            }
        });
    }
    //*Obtener un juego
    obtenerJuego(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!id) {
                    resp.status(400).json({
                        message: "Falta el id del juego a consultar",
                    });
                }
                const juego = yield juegosModel_1.default.findById(id);
                if (!juego) {
                    resp.status(400).json({
                        message: "No se encontró el juego solicitado",
                    });
                }
                else {
                    resp.status(200).json(juego);
                }
            }
            catch (error) {
                console.log("Error al obtener el juego", error);
                resp.status(500).json({
                    message: "Error al obtener el juego",
                });
            }
        });
    }
    //*Eliminar juego
    eliminarJuego(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!id) {
                    resp.status(400).json({
                        message: "Falta el id del juego a consultar",
                    });
                }
                const juego = yield juegosModel_1.default.findById(id);
                if (!juego) {
                    resp.status(400).json({
                        message: "No se encontró el juego solicitado",
                    });
                }
                else {
                    yield juegosModel_1.default.findByIdAndDelete(juego._id);
                    resp.status(200).json({
                        message: "Juego eliminado con éxito",
                    });
                }
            }
            catch (error) {
                console.log("No se pudo eliminar el juego", error);
                resp.status(500).json("No se pudo eliminar el juego");
            }
        });
    }
    //*Crear un juego
    crearJuego(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const modelo = req.body;
                console.log("Modelo: ", modelo);
                const juegoNuevo = new juegosModel_1.default(modelo);
                yield juegoNuevo.save();
                resp.status(200).json({
                    message: "Juego creado con éxito",
                    juego: juegoNuevo,
                });
            }
            catch (error) {
                console.log("No se pudo crear el juego", error);
                resp.status(500).json({
                    status: "error",
                    modelo: req.body,
                    message: "No se pudo crear el juego",
                    error,
                });
            }
        });
    }
    //*Actualizar un juego
    actualizarJuego(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const juego = req.body;
                const id = req.params.id;
                const obtenerJuego = yield juegosModel_1.default.findById(id);
                if (!obtenerJuego) {
                    resp.status(404).json({
                        message: "No se encontró el juego solicitado",
                    });
                }
                yield juegosModel_1.default.findByIdAndUpdate(id, juego, { new: true });
                resp.status(200).json({
                    message: "Juego actualizado con éxito",
                    juego,
                });
            }
            catch (error) {
                console.log("No se pudo actualizar el juego", error);
                resp.status(500).json("No se pudo actualizar el juego");
            }
        });
    }
}
exports.JuegosController = JuegosController;
