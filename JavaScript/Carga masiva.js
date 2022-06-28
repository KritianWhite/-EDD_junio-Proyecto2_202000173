import { Pelicula, AVL } from "./Peliculas arbol AVL.js";
import { Cliente, listaSimple } from "./Clientes lista simple.js";
import { Actor, ArbolABB } from "./Actores ABB.js";


/*

    CARGA DE PELICULAS

*/

var contenidoPeliculasJSON = []
var avl = new AVL()

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
    })
    avl.graficar(avl.root)

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
            contenidoClientesJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }
}
function cargarActores(){
    contenidoActoresJSOM.forEach(e => {
        
    })
}