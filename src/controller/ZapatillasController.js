import ZapatillasApi from '../api/ZapatillasApi.js'
import logger from '../logger.js'

const zapatillas = new ZapatillasApi();

export async function obtenerZapatillas(req, res) {
    logger.info(`Se solicita obtener los zapatillas`)
    try {
        const zapatillasList = await zapatillas.getZapatillas()
        res.status(200).json(zapatillasList)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function obtenerUnZapatilla(req, res) {
    logger.info(`Se solicita obtener una zapatilla en particular`)
    try {
        let codigo = req.params.codigoZapatilla;
        const zapatilla = await zapatillas.getZapatilla(codigo)
        res.status(200).json(zapatilla)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function agregarZapatilla(req, res) {
    logger.info(`Se solicita agregar una zapatilla en particular`)
    try {
        let objeto = req.body;
        const zapatilla = await zapatillas.addZapatilla(objeto)
        res.status(200).json(zapatilla)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function actualizarZapatilla(req, res) {
    logger.info(`Se solicita actualizar las zapatillas`)
    try {
        let codigo = req.params.codigoZapatilla;
        let objeto = req.body;
        const zapatilla = await zapatillas.putZapatilla(codigo, objeto);
        res.status(200).json(zapatilla);
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}

export async function borrarZapatilla(req, res) {
    logger.info(`Se solicita borrar una zapatilla en particular`)
    try {
        let codigo = req.params.codigoZapatilla;
        const zapatilla = await zapatillas.deleteZapatilla(codigo)
        res.status(200).json(codigo)
    }
    catch (err) {
        logger.error(err);
        res.status(err.estado).json(err)
    }
}