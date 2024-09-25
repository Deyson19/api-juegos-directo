import mongoose from "mongoose";

const JuegoSchema = new mongoose.Schema({
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

const Juego = mongoose.model("Juegos", JuegoSchema);
export default Juego;
