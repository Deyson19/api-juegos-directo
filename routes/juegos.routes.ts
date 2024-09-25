import { Router } from "express";
import { JuegosController } from "../controllers/juegos.controllers";
const juegos = new JuegosController();
const router = Router();

//*Definir las rutas
router.get("/", juegos.listadoJuegos);
router.get("/listado", juegos.listadoJuegos);
router.get("/:id", juegos.obtenerJuego);
router.delete("/:id", juegos.eliminarJuego);
router.put("/:id", juegos.actualizarJuego);
router.post("/", juegos.crearJuego);

export default router;
