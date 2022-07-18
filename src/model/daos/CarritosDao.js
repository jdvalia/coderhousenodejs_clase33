import config from '../../../config/config.js'
import CarritosDao from './Mongo/CarritosDao.js';
import MongoCarritosDao from './Mongo/CarritosDao.js';

let baseDeDatos = "Mongo";
let carrito;

if (baseDeDatos === "Mongo") {
    carrito = class CarritosGeneralDao extends MongoCarritosDao {
        constructor() {
            super()
        }
    }
} else {

}

export default carrito;// CarritosDao