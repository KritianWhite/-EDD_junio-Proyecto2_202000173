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

    insert(objeto) {
        const pos = objeto.id_categoria % this.max_size;

        const nodo = this.getNodeByIndex(pos);

        nodo.insert(objeto);
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
        str += "node[shape=rectangle]"

        let aux = this.head;
        let i = 0;
        while (aux != null) {
            str += "nodo" + i + ' [label="' + i + '", style=filled, color=red];\n';

            str += this.graphList(aux, i);

            i++;
            aux = aux.next;
        }

        str += "}";
        console.log(str)
        d3.select("#hash-table").graphviz().width("100%").renderDot(str);
        return str;
    }

    graphList(node, i) {
        let str = "";
        let aux = node.head;
        let j = 0;

        str += "nodo" + i + " -> nodo" + i + "C" + j + ";\n";

        while (aux != null) {
            if (aux.obj != null) {
                str += "nodo" + i + "C" + j + '[label= "ID categoria: ' + aux.obj.id_categoria + "\\n Compania: " + aux.obj.company + '", style=filled, fillcolor=\"#76D7C4\"];\n';
            } else {
                str += "nodo" + i + "C" + j + '[label= " "];\n';
            }

            if (aux.next != null) {
                str += "nodo" + i + "C" + j + " -> nodo" + i + "C" + (j + 1) + "[dir=\"both\"];\n";
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