/**
 
    Objeto para los actores    
 
 */

export class Actor {
    constructor(dni, nombre_actor, correo, descripcion) {
        this._dni = dni
        this._nombre_actor = nombre_actor
        this._correo = correo
        this._descripcion = descripcion
    }
    get dni() {
        return this._dni
    }
    set dni(dni) {
        this._dni = dni
    }
    get nombre_actor() {
        return this._nombre_actor
    }
    set nombre_actor(nombre_actor) {
        this._nombre_actor = nombre_actor
    }
    get correo() {
        return this._correo
    }
    set correo(correo) {
        this._correo = correo
    }
    get descripcion() {
        return this._descripcion
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion
    }

    toString() {
        return `
        Nombre del actor: ${this._nombre_actor}
        DNI: ${this._dni}
        Correo: ${this._correo}
        Descripcion: ${this._descripcion}
        `
    }
}



/*

    Arbol binario

*/

class Nodo {
    constructor(id) {
        this.id = id;
        this.izquierda = null;
        this.derecha = null;
    }
}

export class ArbolABB {
    constructor() {
        this.raiz = null;
    }

    estavacia() {
        return this.raiz === null;
    }

    agregar(id, node = this.raiz) {
        id = id.replace(/ /g, "_")
        if (!node) {
            this.raiz = new Nodo(id);
            return;
        }

        if (id < node.id) {
            if (node.izquierda) {
                return this.agregar(id, node.izquierda);
            }
            node.izquierda = new Nodo(id);
            return;
        } else {
            if (node.derecha) {
                return this.agregar(id, node.derecha);
            }
            node.derecha = new Nodo(id);
            return;
        }
    }

    preOrden(node = this.raiz) {
        if (!node) {
            return;
        }
        console.log(node.id);
        this.preOrden(node.izquierda)
        this.preOrden(node.derecha)
    }

    postOrden(node = this.root) {
        if (!node) {
            return;
        }
        this.postOrden(node.izquierda);
        this.postOrden(node.derecha);
        console.log(node.id);
    }

    InOrden(node = this.raiz) {
        if (!node) {
            return;
        }
        this.InOrden(node.izquierda);
        console.log(node.id);
        this.InOrden(node.derecha);
    }

    graficar(raiz) {
        var cadena = '';
        cadena += "digraph G { \n"
        cadena += "rankdir=TB; \n";
        cadena += "node [shape = record, color=black , style=filled, fillcolor=gray93];\n";
        cadena += this.__graficadora(raiz);
        cadena += "} \n";
        d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);
    }

    __graficadora(root) {
        var cadena;
        cadena = "";

        if (root.derecha === null && root.izquierda === null) {
            cadena = "nodo" + root.id.toString() + "[label =\" " + root.id.toString().replace(/_/g, " ") + "\"]; \n";
        } else {
            cadena = "nodo" + root.id.toString() + "[label =\"<C0>| " + root.id.toString().replace(/_/g, " ") + "|<C1> \"]; \n";
        }

        if (root.izquierda !== null) {
            cadena = cadena + this.__graficadora(root.izquierda) + "nodo" + root.id.toString() + ":C0->nodo" + root.izquierda.id.toString() + "\n";
        }

        if (root.derecha !== null) {
            cadena = cadena + this.__graficadora(root.derecha) + "nodo" + root.id.toString() + ":C1->nodo" + root.derecha.id.toString() + "\n";
        }
        return cadena
    }

}