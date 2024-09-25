import { ObjectId } from "mongoose";

export interface Juego {
   _id?: ObjectId | string;
   nombre: string;
   descripcion: string;
   categoria: string;
   precio: string;
   imagen: string;
   fechaCreacion: Date | string;
}
