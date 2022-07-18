import config from '../../../config/config.js'
import MongoUsuariosDao from './Mongo/UsuariosDao.js';

let baseDeDatos = "Mongo";
let usuario;

if (baseDeDatos === "Mongo") {
    usuario = class UsuariosGeneralDao extends MongoUsuariosDao {
        constructor() {
            super()
        }
    }
} else {

}
export default usuario;