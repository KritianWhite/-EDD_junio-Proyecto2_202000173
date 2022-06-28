/*

    Objeto para cada pelicula

*/

export class Pelicula{
    constructor(id_pelicula, nombre_pelicula, descripcion, puntuacion_star, precio_Q){
        this._id_pelicula = id_pelicula
        this._nombre_pelicula = nombre_pelicula
        this._descripcion = descripcion
        this._puntuacion_star = puntuacion_star
        this._precio_Q = precio_Q
    }
    get id_pelicula(){
        return this._id_pelicula
    }
    set id_pelicula(id_pelicula){
        this._id_pelicula = id_pelicula
    }
    get nombre_pelicula(){
        return this._nombre_pelicula
    }
    set nombre_pelicula(nombre_pelicula){
        this._nombre_pelicula = nombre_pelicula
    }
    get descripcion(){
        return this._descripcion
    }
    set descripcion(descripcion){
        this._descripcion = descripcion
    }
    get puntuacion_star(){
        return this._puntuacion_star
    }
    set puntuacion_star(puntuacion_star){
        this._puntuacion_star = puntuacion_star
    }
    get precio_Q(){
        return this._precio_Q
    }
    set precio_Q(precio_Q){
        this._precio_Q = precio_Q
    }

    toString(){
        return `
        Nombre pelicula: ${this._nombre_pelicula}
        ID: ${this._id_pelicula}
        Precio: ${this._precio_Q}
        Puntuacion (Estrellas): ${this._puntuacion_star}
        Descripcion: ${this._descripcion}
        `
    }
}


/*

    Arbol AVL (utilizando el ide la pelicula)

*/

class Nodo {
    constructor(dato, valor) {
      this.dato = dato;
      this.valor = valor;
      this.der = null;
      this.izq = null;
      this.altura = 0;
    }
  }
  
export class AVL {
    constructor() {
      this.root = null;
    }
  
    insertar(dato, valor) {
      this.root = this._insert(this.root, dato, valor);
    }
  
    buscar(indice) {
      return this._buscar(this.root, indice);
    }
  
    printIO() {
      this._recorridoInOrden(this.root);
    }
  
    printPEO() {
      this._recorridoPreOrden(this.root);
    }
  
    printPOS() {
      this._recorridoPostOrden(this.root);
    }
  
    _MAX(val1, val2) {
      if (val1 > val2) {
        return val1;
      }
  
      return val2;
    }
    _getAltura(temp) {
      if (temp !== null) {
        return temp.altura;
      }
      return -1;
    }
  
    _rotacionIzquierda(pivote) {
      var aux;
      aux = pivote.izq;
      pivote.izq = aux.der;
      aux.der = pivote;
      pivote.altura =
        this._MAX(this._getAltura(pivote.izq), this._getAltura(pivote.der)) + 1;
      aux.altura = this._MAX(this._getAltura(aux.izq), pivote.altura) + 1;
      return aux;
    }
  
    _rotacionDerecha(pivote) {
      var aux;
      aux = pivote.der;
      pivote.der = aux.izq;
      aux.izq = pivote;
      pivote.altura =
        this._MAX(this._getAltura(pivote.der), this._getAltura(pivote.izq)) + 1;
      aux.altura = this._MAX(this._getAltura(aux.der), pivote.altura) + 1;
      return aux;
    }
  
    _rotacionDobleIzquierda(pivote) {
      pivote.izq = this._rotacionDerecha(pivote.izq);
      return this._rotacionIzquierda(pivote);
    }
  
    _rotacionDobleDerecha(pivote) {
      pivote.der = this._rotacionIzquierda(pivote.der);
      return this._rotacionDerecha(pivote);
    }
  
    _insert(root, dato, valor) {
      if (root === null) {
        root = new Nodo(dato, valor);
      } else {
        if (dato < root.dato) {
          root.izq = this._insert(root.izq, dato, valor);
          if (this._getAltura(root.der) - this._getAltura(root.izq) === -2) {
            if (dato < root.izq.dato) {
              root = this._rotacionIzquierda(root);
            } else {
              root = this._rotacionDobleIzquierda(root);
            }
          }
        } else {
          if (dato > root.dato) {
            root.der = this._insert(root.der, dato, valor);
            if (this._getAltura(root.der) - this._getAltura(root.izq) === 2) {
              if (dato > root.der.dato) {
                root = this._rotacionDerecha(root);
              } else {
                root = this._rotacionDobleDerecha(root);
              }
            }
          }
        }
      }
      root.altura =
        this._MAX(this._getAltura(root.izq), this._getAltura(root.der)) + 1;
      return root;
    }
  
    _buscar(pivote, indice) {
      if (pivote !== null) {
        if (pivote.dato === indice) {
          return true;
        }
        if (pivote.izq !== null) {
          return this._buscar(pivote.izq, indice);
        } else {
          return this._buscar(pivote.der, indice);
        }
      }
      return false;
    }
  
    _recorridoInOrden(pivote) {
      if (pivote !== null) {
        this._recorridoInOrden(pivote.izq);
        console.log(pivote.dato.toString(), pivote.valor);
        this._recorridoInOrden(pivote.der);
      }
      return;
    }
  
    _recorridoPreOrden(pivote) {
      if (pivote !== null) {
        console.log(pivote.dato.toString(), pivote.valor);
        this._recorridoInOrden(pivote.izq);
        this._recorridoInOrden(pivote.der);
      }
      return;
    }
  
    _recorridoPostOrden(pivote) {
      if (pivote !== null) {
        this._recorridoInOrden(pivote.izq);
        this._recorridoInOrden(pivote.der);
        console.log(pivote.dato.toString(), pivote.valor);
      }
      return;
    }
  
    graficar(raiz) {
      var cadena = "";
      cadena += "digraph G { \n";
      cadena += "rankdir=TB; \n";
      cadena +=
        "node [shape = record, color=black , style=filled, fillcolor=gray93];\n";
      cadena += this.__graficadora(raiz);
      cadena += "} \n";
      d3.select("#arbol-AVL").graphviz().width(1350).height(500).renderDot(cadena);
    }
  
    __graficadora(root) {
      var cadena;
      cadena = "";
  
      if (root.der === null && root.izq === null) {
        cadena =
          "nodo" +
          root.dato.toString() +
          '[label =" ' +
          root.dato.toString() +
          " " +
          root.valor +
          '"]; \n';
      } else {
        cadena =
          "nodo" +
          root.dato.toString() +
          '[label ="<C0>| ' +
          root.dato.toString() +
          " " +
          root.valor +
          '|<C1> "]; \n';
      }
  
      if (root.izq !== null) {
        cadena =
          cadena +
          this.__graficadora(root.izq) +
          "nodo" +
          root.dato.toString() +
          ":C0->nodo" +
          root.izq.dato.toString() +
          "\n";
      }
  
      if (root.der !== null) {
        cadena =
          cadena +
          this.__graficadora(root.der) +
          "nodo" +
          root.dato.toString() +
          ":C1->nodo" +
          root.der.dato.toString() +
          "\n";
      }
      return cadena;
    }
  }
