import { Router } from 'express'
import config from '../../config/config.js'

const PrincipalRoutes = new Router();

PrincipalRoutes.get("/", (_req, res) => {

   const objeto = {
      puerto: config.PORT,
      process_id: process.pid,
      modo: config.MODO,
      BD: Mongo,
      MongoURL: config.MONGO_URL,
      MongoBD: config.MONGO_DB,
      MongoSessionURL: config.MONGO_SESSION_URL,
      enviroment: config.NODE_ENV,
      host: config.HOST,
      Sesiones: config.SESSION_MAXAGE,
      Secreto: config.SECRET,

   }
   res.status(200).json(objeto);
});
export default PrincipalRoutes 