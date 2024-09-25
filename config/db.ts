import Mongoose from "mongoose";
require("dotenv").config({
   path: `.env`,
});

const url = process.env.DB_MONGO;

//*Conectarse
const conn = async () => {
   try {
      await Mongoose.connect(url!);
   } catch (error) {
      console.log("Problemas al conectarse a mongodb", error);
   }
};

export default conn;
