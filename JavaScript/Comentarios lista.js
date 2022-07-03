export class Comentario{
    constructor(pelicula, usuario, comentario){
        this._pelicula = pelicula
        this._usuario = usuario
        this._comentario = comentario
    }
    get pelicula(){
        return this._pelicula
    }
    set pelicula(pelicula){
        this._pelicula = pelicula
    }
    get usuario(){
        return this._usuario
    }
    set usuario(usuario){
        this._usuario = usuario
    }
    get comentario(){
        return this._comentario
    }
    set comentario(comentario){
        this._comentario = comentario
    }

    toString(){
        return `
        Pelicula: ${this._pelicula}
        User: ${this._usuario}. Comentario: ${this._comentario}
        `
    }
}
/**
 * 
 * LISTA SIMPLE PARA LOS COMENTARIOS (GUARDAR Y RECORRER)
 * 
 */
 class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class listaSimpleC {
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
}