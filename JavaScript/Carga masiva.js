import { Pelicula, AVL, listaSimpleP } from "./Peliculas arbol AVL.js";
import { Cliente, listaSimple } from "./Clientes lista simple.js";
import { Actor, ArbolABB } from "./Actores ABB.js";
import { Categoria, HashTable } from "./Categorias hash table.js";


document.getElementById("btn-ordenar-ascendente").onclick = librosAscendente
document.getElementById("btn-ordenar-descendente").onclick = librosDescendente

/*

    CARGA DE PELICULAS

*/

var contenidoPeliculasJSON = []
var avl = new AVL()
var listaPelis = new listaSimpleP()

window.addEventListener("load", () => {
    document
        .getElementById("fichero-peliculas")
        .addEventListener("change", abrirPeliculasJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("btn-cargar-peliculas")
        .addEventListener("click", cargarPeliculas)
})

function abrirPeliculasJSON(evento) {
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoPeliculasJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }
}

function cargarPeliculas() {
    alert("Cargando peliculas...!!")
    contenidoPeliculasJSON.forEach(e => {
        avl.insertar(e.id_pelicula, e.nombre_pelicula)
        listaPelis.agregarAlfinal(new Pelicula(e.id_pelicula,
            e.nombre_pelicula, 
            e.descripcion, e.puntuacion_star,
            e.precio_Q))
    })
    avl.graficar(avl.root)
    //listaPelis.recorrerLista()
    listaPelis.mostrarDatos()
}
function librosAscendente(){
    listaPelis.ordenamientoBurbuja_Ascendente()
    listaPelis.mostrarDatos()
}
function librosDescendente(){
    listaPelis.ordenamientoBurbuja_Descendente()
    listaPelis.mostrarDatos()
}


/*

    CARGAR CLIENTES

*/

var lista_Simple = new listaSimple()
var contenidoClientesJSON = []

window.addEventListener("load", () => {
    document
        .getElementById("fichero-clientes")
        .addEventListener("change", abrirClientesJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("btn-cargar-clientes")
        .addEventListener("click", cargarClientes)
})

function abrirClientesJSON(evento) {
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoClientesJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }
}
function cargarClientes() {
    alert("Cargando clientes...!")
    contenidoClientesJSON.forEach(e => {
        lista_Simple.agregarAlinicio(new Cliente(e.dpi,
            e.nombre_completo,
            e.nombre_usuario,
            e.correo,
            e.contrasenia,
            e.telefono))
    })
    lista_Simple.recorrerLista()
    lista_Simple.graficar()
}


/*

    CARGA ACTORES

    
*/
var contenidoActoresJSOM = []
var abb = new ArbolABB()

window.addEventListener("load", () => {
    document
        .getElementById("fichero-actores")
        .addEventListener("change", abrirActoresJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("btn-cargar-actores")
        .addEventListener("click", cargarActores)
})

function abrirActoresJSON(evento) {
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoActoresJSOM = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }
}
function cargarActores(){
    alert("Cargando actores...!")
    contenidoActoresJSOM.forEach(e => {
        abb.agregar(new Actor(e.dni,
            e.nombre_actor,
            e.correo,
            e.descripcion))
    })
    //abb.InOrden(abb.raiz)
    abb.graficar(abb.raiz)
}

/**
 * 
 * 
 *      CARGA DE CATEGORIAS
 * 
 * 
 */

var contenidoCategoriasJSON = []
var hastable = new HashTable(20, 8)

window.addEventListener("load", () =>{
    document
        .getElementById("fichero-categorias")
        .addEventListener("change", abrirCategoriasJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("btn-cargar-categorias")
        .addEventListener("click", cargarCategorias)
})

function abrirCategoriasJSON(evento){
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoCategoriasJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }
}
function cargarCategorias(){
    alert("Cargando categorias...!")
    contenidoCategoriasJSON.forEach(e => {
        //console.log(e.id_categoria, e.company)
        hastable.insert(new Categoria(e.id_categoria, e.company))
    })
    hastable.graph()
}