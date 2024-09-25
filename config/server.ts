import express, { Application } from "express";
import cors from "cors";
import db from "./db";
import juegosRoute from "../routes/juegos.routes";
export class Server {
   private app: Application;
   private port: string;
   private pathsApi = {
      juegos: "/api/juegos",
      games: "/api/games",
   };

   constructor() {
      this.app = express();
      this.port = process.env.PORT || "3000";
      this.connection();
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(this.pathsApi.juegos, juegosRoute);
      this.app.use(this.pathsApi.games, juegosRoute);
   }

   private async connection() {
      await db();
   }

   public runApp() {
      this.app.listen(this.port, () => {
         console.log(`Servidor corriendo en el puerto ${this.port}`);
      });
   }
}
