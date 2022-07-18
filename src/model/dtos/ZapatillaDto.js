export default class ZapatillaDto {

    _id;
    id;
    marca;
    modelo;
    precio;
    stock;

    constructor({ _id, id, marca, modelo, precio, stock }) {

        if (_id === undefined) {
            this._id = undefined;
        }
        else {
            this._id = _id;
        }
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    get() {
        return {
            _id: this._id,
            id: this.id,
            marca: this.marca,
            modelo: this.modelo,
            precio: this.precio,
            stock: this.stock,
        }
    }
}