class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get telefono() {
        return this._telefono;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }


    datosPropietarios() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}
/**--------------------------------------------------------------------------------------- */
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }
    getTipoAnimal() {
        return ` El tipo de animal es un ${this.tipo},`;
    }
}
/**--------------------------------------------------------------------------------------- */

class Mascota extends Animal {

    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }

    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
    getNombreEnfermedadMascota() {
        return `mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
    }
}
/**--------------------------------------------------------------------------------------- */


const obtenerValores = (valueIdNameElement) => {
    return document.getElementById(valueIdNameElement).value;
}

document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
    event.preventDefault();
    const propietario = obtenerValores('propietario');
    const telefono = obtenerValores('telefono');
    const direccion = obtenerValores('direccion');
    const nombreMascota = obtenerValores('nombreMascota');
    const tipo = obtenerValores('tipo');
    const enfermedad = obtenerValores('enfermedad');

    const mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);

    const $resultElement = document.getElementById('resultado').children[0];

    const $datosPropetario = document.createElement("li");
    const $tipoNombreEnfermedadMascota = document.createElement("li");

    $datosPropetario.innerHTML = `${mascota.datosPropietarios()}`;
    $tipoNombreEnfermedadMascota.innerHTML = `${mascota.getTipoAnimal()} ${mascota.getNombreEnfermedadMascota()}`;

    $resultElement.appendChild($datosPropetario);
    $resultElement.appendChild($tipoNombreEnfermedadMascota);
});