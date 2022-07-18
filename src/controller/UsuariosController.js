import UsersApi from '../api/UsuariosApi.js'

const users = new UsersApi();

export async function obtenerUsuarios(req, res) {
    try {
        const usuariosList = await users.getUsuarios()
        res.status(200).json(usuariosList)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}

export async function failRegister(req, res) {
    res.status(400).json({ err: 'Fallo el registro del Usuario' })
}

export async function successRegister(req, res) {
    res.status(200).json({ msg: 'Se ha registrado exitosamente' })
}

export function failLogin(req, res) {
    res.status(400).json({ err: 'Fallo el login' })
}

export function successLogin(req, res) {
    res.status(200).json({ msg: 'Se ha logueado exitosamente' })
}

export function logout(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.status(200).json({ msg: 'Ha salido del ecommerce exitosamente' })
}

export function requiereAutenticacion(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({ msg: 'requiere autenticacion con un Usuario' })
    }
}
