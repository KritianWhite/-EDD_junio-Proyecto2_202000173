/**
 * 
 * 
 *      Objeto para categoria
 * 
 * 
 */
export class Categoria {
    constructor(id_categoria, company) {
        this._id_categoria = id_categoria
        this._company = company
    }
    get id_categoria() {
        return this._id_categoria
    }
    set id_categoria(id_categoria) {
        this._id_categoria = id_categoria
    }
    get company() {
        return this._company
    }
    set company(company) {
        this._company = company
    }

    toString() {
        return `
        Compania: ${this._company}
        ID categoria: ${this._id_categoria}
        `
    }
}


/**
 * 
 * 
 *      HashTable
 * 
 * 
 */

/*
export class HashTable {
    constructor(max_size, max_size2) {
        this.head = null;
        this.max_size = max_size;

        for (let i = 0; i < max_size; i++) {
            this.createNode(max_size2);
        }
    }

    isVoid() {
        return this.head == null;
    }

    getNodeByIndex(index) {
        let i = 0;

        let aux = this.head;
        while (aux != null) {
            if (i == index) return aux;

            i++;
            aux = aux.next;
        }
        return null;
    }

    insert(key, value) {
        const pos = key % this.max_size;

        const nodo = this.getNodeByIndex(pos);

        nodo.insert(value);
    }

    createNode(max_size) {
        let nodo = new HashNode(max_size);
        if (this.isVoid()) {
            this.head = nodo;
            return;
        }

        let aux = this.head;
        while (aux.next != null) {
            aux = aux.next;
        }
        aux.next = nodo;
    }

    graph() {
        let str = "digraph G {\n";
        str += "rankdir=LR;\n";

        let aux = this.head;
        let i = 0;
        while (aux != null) {
            str += "nodo" + i + ' [label="' + i + '"];\n';

            str += this.graphList(aux, i);

            i++;
            aux = aux.next;
        }

        str += "}";
        d3.select("#hash-table").graphviz().width("100%").zoom(false).fit(true).renderDot(str);
        //return str;
    }

    graphList(node, i) {
        let str = "";
        let aux = node.head;
        let j = 0;

        str += "nodo" + i + " -> nodo" + i + "C" + j + ";\n";

        while (aux != null) {
            if (aux.obj != null) {
                str += "nodo" +  i + "C" + j + '[label= "' + aux.obj + "|" + aux.obj + '"];\n';
            } else {
                str += "nodo" + i + "C" + j + '[label= "null"];\n';
            }

            if (aux.next != null) {
                str += "nodo" + i + "C" + j + " -> nodo" + i + "C" + (j + 1) + ";\n";
            }

            j++;
            aux = aux.next;
        }
        return str;
    }
}

class HashNode {
    constructor(max_size) {
        this.next = null;
        this.max_size = max_size;

        this.head = null;

        for (let i = 0; i < max_size; i++) {
            this.createElement();
        }
    }

    isVoid() {
        return this.head == null;
    }

    insert(obj) {
        let aux = this.head;

        while (aux != null) {
            if (aux.obj == null) {
                aux.obj = obj;
                return;
            }

            aux = aux.next;
        }
    }

    createElement() {
        let nodo = new HashElement();
        if (this.isVoid()) {
            this.head = nodo;
            return;
        }

        let aux = this.head;
        while (aux.next != null) {
            aux = aux.next;
        }
        aux.next = nodo;
    }
}

class HashElement {
    constructor() {
        this.next = null;
        this.obj = null;
    }
}
*/

class Dic {
    constructor(llave, valor) {
        this._llave = llave;
        this._valor = valor;
    }

    get llave() {
        return this._llave;
    }

    get valor() {
        return this._valor;
    }

    set llave(llave) {
        this._llave = llave;
    }

    set valor(valor) {
        this._valor = valor;
    }

    toString() {
        return `${this.llave}: ${this.valor}`;
    }
}

class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class listaSimple {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    estavacia() {
        return this.primero === null;
    }

    agregarAlinicio(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato);
        } else {
            let auxiliar = new Nodo(dato);
            auxiliar.siguiente = this.primero;
            this.primero = auxiliar;
        }
    }

    agregarAlfinal(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato);
        } else {
            let auxiliar = this.ultimo;
            this.ultimo = new Nodo(dato);
            auxiliar.siguiente = this.ultimo;
        }
    }

    eliminarAlinicio() {
        if (this.estavacia()) {
            console.log("Lista vacia");
        } else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null;
        } else {
            this.primero = this.primero.siguiente;
        }
    }

    eliminarAlfinal() {
        if (this.estavacia()) {
            console.log("Lista vacia");
        } else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null;
        } else {
            let auxiliar = this.primero;
            while (auxiliar.siguiente != this.ultimo) {
                auxiliar = auxiliar.siguiente;
            }
            auxiliar.siguiente = null;
        }
    }

    recorrerLista() {
        if (this.estavacia()) {
            console.log("La lista esta vacia");
        }
        let auxiliar = this.primero;
        while (auxiliar != null) {
            console.log(auxiliar.dato.toString());
            auxiliar = auxiliar.siguiente;
        }
        console.log("\n");
    }

    tamanio() {
        var contador = 0;
        if (this.estavacia()) {
            return 0;
        }
        let auxiliar = this.primero;
        while (auxiliar != null) {
            contador += 1;
            auxiliar = auxiliar.siguiente;
        }
        //console.log("Número de elementos de la lista: " + contador);
        return contador;
    }

    buscarDato(llave) {
        if (this.estavacia()) {
            console.log("No hay elementos");
        }
        let auxiliar = this.primero;
        while (auxiliar != null) {
            if (auxiliar.dato.llave === llave) {
                //console.log(auxiliar.dato.toString() + ", nombre encontrado.");
                return auxiliar.dato.valor;
            }
            auxiliar = auxiliar.siguiente;
        }
        return undefined;
    }

    eliminar(llave) {
        //console.log(llave);
        let nodo_a_borrar = null, current = null;
        if (this.tamanio() == 0) {
            return false;
        } else if (this.primero.dato.llave == llave) {
            this.primero = this.primero.siguiente;
            return true;
        } else {
            current = this.primero;
            try {
                while (current.siguiente.dato.llave != llave) {
                    current = current.siguiente;
                }
                nodo_a_borrar = current.siguiente;
                current.siguiente = nodo_a_borrar.siguiente;
                if (nodo_a_borrar === this.ultimo) {
                    this.ultimo = current;
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }

    graficarDot() {
        let aux = this.primero;
        //let cont = 0;
        let cadena = "";
        //conectores = [this.primero.dato.llave, cadena];

        while (aux !== null) {
            //console.log(aux.dato.llave, ":", aux.dato.valor)
            cadena += `"${aux.dato.llave}"` + '[label="' + aux.dato.llave + ":" + aux.dato.valor + '", fillcolor="#76D7C4"];\n';
            //cadena += `"${aux.dato.llave}"` + " -> " + `"${aux.siguiente.dato.llave}"` + '\n';
            //cont += 1;
            aux = aux.siguiente;
        }
        aux = this.primero;
        console.log("ultima llave: ", this.ultimo.dato.llave);
        while (aux !== this.ultimo) {
            //console.log(aux.dato.llave, " -> ", `${aux.siguiente.dato.llave}`)
            cadena += `"${aux.dato.llave}"` + " -> " + `"${aux.siguiente.dato.llave}"[dir=both]` + ';\n';
            aux = aux.siguiente;
        }
        //console.log(cadena);
        return [this.primero.dato.llave, cadena];
    }
}

export class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.large = 0;
    }

    _hash(llave) {
        let posicion = parseInt(llave) % (this.table.length)
        console.log(llave+" -------> "+posicion)
        return posicion
    }

    toAscci(llave){
        let hash = 0;
        llave = llave.toString()
        for (let i = 0; i < llave.length; i++) {
            hash += llave.charCodeAt(i);
        }
        return hash;
    }

    set(llave, value) {
        const indice = this._hash(llave);
        if (this.table[indice] === undefined) {
            this.table[indice] = new listaSimple();
            //console.log("Si existe!!!");
            this.table[indice].agregarAlfinal(new Dic(llave, value));
        } else {
            this.table[indice].agregarAlfinal(new Dic(llave, value));
            //this.table[indice].recorrerLista();
        }
    }

    get(llave) {
        const indice = this._hash(llave);
        const lts = this.table[indice];
        if (lts !== undefined) {
            const dato_a_encontrar = lts.buscarDato(llave);
            if (dato_a_encontrar !== undefined) {
                return dato_a_encontrar;
            }
            return dato_a_encontrar;
        }
    }

    remove(llave) {
        const indice = this._hash(llave);
        if (this.table[indice] && this.table[indice].tamanio()) {
            this.table[indice].eliminar(llave);
            return true;
        }
        return false;
    }

    show() {
        let cadena = "";
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(String(i));
                this.table[i].recorrerLista();
            }
        }
        return;
    }

    draw() {
        let temporal, cadena, cont;
        cont = 0;
        cadena = ""
        cadena += `
  digraph G {
    nodesep=.05;
    rankdir=LR;
    node [style=filled shape=record,width=.1,height=.1];
    edge[shape=both];\n
  `
        cadena += `node0[label = " `
        for (let i = 0; i < this.table.length; i++) { //*Solo para hacer la columna
            if (i != this.table.length - 1) {
                cadena += `<f${i}>${i} |`
            } else {
                cadena += `<f${i}>${i}`
            }
        }
        cadena += "\" , fillcolor=red width=0.75, height=12.5];\n";
        cadena += "node[width=1.0];\n";

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                const [enlace, sub_cadena] = [... this.table[i].graficarDot()];
                cadena += `node0:f${i} -> ${enlace}:l;\n`
                cadena += sub_cadena;

            }
        }
        cadena += "}"
        console.log(cadena)
        d3.select("#hash-table").graphviz().width("100%").zoom(false).fit(true).renderDot(cadena);
    }
}