import config from '../../../config/config.js'
import ZapatillasDao from './Mongo/ZapatillasDao.js';
import MongoZapatillasDao from './Mongo/ZapatillasDao.js';

let baseDeDatos = "Mongo";
let zapatilla;

if (baseDeDatos === "Mongo") {
    zapatilla = class ZapatillasGeneralDao extends MongoZapatillasDao {
        constructor() {
            super()
        }
    }
} else {
}

export default zapatilla;