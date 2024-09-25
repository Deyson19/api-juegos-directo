import { Request, Response } from "express";
import JuegoModel from "../models/juegosModel";
import { Juego } from "../interfaces/juego";

export class JuegosController {
   //*Listado de juegos
   public async listadoJuegos(req: Request, resp: Response) {
      try {
         const juegos: Juego[] = await JuegoModel.find();
         resp.status(200).json({
            message:
               juegos.length > 0
                  ? "Listado de juegos"
                  : "No hay juegos para mostrar",
            juegos,
         });
      } catch (error) {
         console.log("Error al obtener el listado", error);
         resp.status(500).json({ message: "Error al obtener el listado" });
      }
   }
   //*Obtener un juego
   public async obtenerJuego(req: Request, resp: Response) {
      try {
         const id = req.params.id;
         if (!id) {
            resp.status(400).json({
               message: "Falta el id del juego a consultar",
            });
         }
         const juego = await JuegoModel.findById(id);
         if (!juego) {
            resp.status(400).json({
               message: "No se encontró el juego solicitado",
            });
         } else {
            resp.status(200).json(juego);
         }
      } catch (error) {
         console.log("Error al obtener el juego", error);
         resp.status(500).json({
            message: "Error al obtener el juego",
         });
      }
   }

   //*Eliminar juego
   public async eliminarJuego(req: Request, resp: Response) {
      try {
         const id = req.params.id;
         if (!id) {
            resp.status(400).json({
               message: "Falta el id del juego a consultar",
            });
         }
         const juego = await JuegoModel.findById(id);
         if (!juego) {
            resp.status(400).json({
               message: "No se encontró el juego solicitado",
            });
         } else {
            await JuegoModel.findByIdAndDelete(juego._id);
            resp.status(200).json({
               message: "Juego eliminado con éxito",
            });
         }
      } catch (error) {
         console.log("No se pudo eliminar el juego", error);
         resp.status(500).json("No se pudo eliminar el juego");
      }
   }

   //*Crear un juego
   public async crearJuego(req: Request, resp: Response) {
      try {
         const modelo: Juego = req.body;
         console.log("Modelo: ", modelo);

         const juegoNuevo = new JuegoModel(modelo);
         await juegoNuevo.save();
         resp.status(200).json({
            message: "Juego creado con éxito",
            juego: juegoNuevo,
         });
      } catch (error) {
         console.log("No se pudo crear el juego", error);
         resp.status(500).json({
            status: "error",
            modelo: req.body,
            message: "No se pudo crear el juego",
            error,
         });
      }
   }

   //*Actualizar un juego
   public async actualizarJuego(req: Request, resp: Response) {
      try {
         const juego: Juego = req.body;
         const id = req.params.id;
         const obtenerJuego = await JuegoModel.findById(id);
         if (!obtenerJuego) {
            resp.status(404).json({
               message: "No se encontró el juego solicitado",
            });
         }
         await JuegoModel.findByIdAndUpdate(id, juego, { new: true });
         resp.status(200).json({
            message: "Juego actualizado con éxito",
            juego,
         });
      } catch (error) {
         console.log("No se pudo actualizar el juego", error);
         resp.status(500).json("No se pudo actualizar el juego");
      }
   }
}
