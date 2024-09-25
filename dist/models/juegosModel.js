"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JuegoSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date || String,
        default: Date.now(),
    },
});
const Juego = mongoose_1.default.model("Juegos", JuegoSchema);
exports.default = Juego;
