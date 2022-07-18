import CarritosApi from '../api/CarritosApi.js'
import logger from '../logger.js'

const carritos = new CarritosApi();

export async function obtenerCarritos(req, res) {
    try {
        const carritosList = await carritos.getCarritos()
        res.status(200).json(carritosList)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function obtenerZapatillasDelCarrito(req, res) {
    logger.info(`Se solicita obtener las zapatillas del carrito`)
    try {
        let idCarrito = req.params.idCarrito;
        const carrito = await carritos.getZapatillasDelCarrito(idCarrito)
        res.status(200).json(carrito)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function crearCarrito(req, res) {
    logger.info(`Se solicita crear un carrito`)
    try {
        let objeto = req.body;
        const carrito = await carritos.addCarrito(objeto)
        res.status(200).json(carrito)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function agregarZapatillaAlCarrito(req, res) {
    let idCarrito = req.params.idCarrito;
    let objNuevoZapatilla = req.body;
    logger.info(`Se solicita agregar una zapatilla al carrito con id ${idCarrito}`)
    try {
        const carrito = await carritos.addZapatillaAlCarrito(idCarrito, objNuevoZapatilla)
        res.status(200).json(carrito)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function borrarZapatillaAlCarrito(req, res) {
    let idCarrito = req.params.idCarrito;
    let codigoZapatilla = req.params.codigoZapatilla;
    logger.info(`Se solicita borrar la zapatilla con codigo: ${codigoZapatilla},  del carrito con id ${idCarrito}`)
    try {
        const carrito = await carritos.deleteZapatillaAlCarrito(idCarrito, codigoZapatilla)
        res.status(200).json(carrito)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function borrarCarrito(req, res) {
    logger.info(`Se solicita borrar el carrito`)
    try {
        let idCarrito = req.params.idCarrito;
        logger.info(`id del carrito: ${idCarrito}`)
        const carrito = await carritos.deleteCarrito(idCarrito)
        res.status(200).json(carrito)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}
