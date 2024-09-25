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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const juegos_routes_1 = __importDefault(require("../routes/juegos.routes"));
class Server {
    constructor() {
        this.pathsApi = {
            juegos: "/api/juegos",
            games: "/api/games",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.connection();
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(this.pathsApi.juegos, juegos_routes_1.default);
        this.app.use(this.pathsApi.games, juegos_routes_1.default);
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.default)();
        });
    }
    runApp() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
