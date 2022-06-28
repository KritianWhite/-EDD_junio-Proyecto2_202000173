/*

    Objeto de usuarios

*/
export class Cliente{
    constructor(dpi, nombre_completo, nombre_usuario, correo, contrasenia, telefono){
        this._dpi = dpi
        this._nombre_completo = nombre_completo
        this._nombre_usuario = nombre_usuario
        this._correo = correo
        this._contrasenia = contrasenia
        this._telefono = telefono
    }
    get dpi(){
        return this._dpi
    }
    set dpi(dpi){
        this._dpi = dpi
    }
    get nombre_completo(){
        return this._nombre_completo
    }
    set nombre_completo(nombre_completo){
        this._nombre_completo = nombre_completo
    }
    get nombre_usuario(){
        return this._nombre_usuario
    }
    set nombre_usuario(nombre_usuario){
        this._nombre_usuario = nombre_usuario
    }
    get correo(){
        return this._correo
    }
    set correo(correo){
        this._correo = correo
    }
    get contrasenia(){
        return this._contrasenia
    }
    set contrasenia(contrasenia){
        this._contrasenia = contrasenia
    }
    get telefono(){
        return this._telefono
    }
    set telefono(telefono){
        this._telefono = telefono
    }

    toString(){
        return `
        Nombre Completo: ${this._nombre_completo}
        DPI: ${this._dpi}
        Nombre usuario: ${this._nombre_usuario}
        Correo: ${this._correo}
        Contraseña: ${this._contrasenia}
        Telefono: ${this._telefono}
        `
    }
}


/*

    Lista simple

*/

class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class listaSimple {
    constructor() {
        this.primero = null
        this.ultimo = null
    }

    estavacia() {
        return this.primero === null
    }

    agregarAlinicio(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        } else {
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
        }
    }

    agregarAlfinal(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        } else {
            let auxiliar = this.ultimo
            this.ultimo = new Nodo(dato)
            auxiliar.siguiente = this.ultimo
        }
    }

    eliminarAlinicio() {
        if (this.estavacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            this.primero = this.primero.siguiente
        }
    }

    eliminarAlfinal() {
        if (this.estavacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            let auxiliar = this.primero
            while (auxiliar.siguiente != this.ultimo) {
                auxiliar = auxiliar.siguiente
            }
            auxiliar.siguiente = null
        }
    }

    recorrerLista() {
        if (this.estavacia()) {
            console.log("La lista esta vacia")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            console.log(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
        }
        console.log("\n")
    }

    tamanio() {
        var contador = 0
        if (this.estavacia()) {
            return 0
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            contador += 1
            auxiliar = auxiliar.siguiente
        }
        console.log("Número de elementos de la lista: " + contador)
        return contador
    }

    buscarDato(dato_) {
        if (this.estavacia()) {
            console.log("No hay elementos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato.nombre === dato_) {
                console.log((auxiliar.dato.toString()) + ", nombre encontrado.")
            }
            auxiliar = auxiliar.siguiente
        }
        return dato_ + ", dato no encontrado"
    }

    ordenamientoBurbuja() {
        let auxiliar
        let actual = auxiliar = null
        if (!this.estavacia()) {
            actual = this.primero
            while (actual.siguiente) {
                auxiliar = actual.siguiente
                while (auxiliar) {
                    if (auxiliar.dato.nombre < actual.dato.nombre) {
                        let temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    }
                    auxiliar = auxiliar.siguiente
                }
                actual = actual.siguiente
            }
        } else {
            console.log("No se encontraron elementos")
        }
    }


    graficar() {
        var temporal, cadena, cont;
        temporal = this.primero;
        cont = 0;
        cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (temporal !== null) {
            cadena += "Node" + cont + "[label=\"" + temporal.dato.nombre+ " \n" + temporal.dato.apellido + "\"];\n";

            if (temporal !== this.primero) {
                cadena += "Node" + (cont - 1) + " -> " + "Node" + cont + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }


        cadena += "}";
        console.log(cadena);
        d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);
    }
}
