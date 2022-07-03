import { Pelicula, AVL, listaSimpleP } from "./Peliculas arbol AVL.js";
import { Cliente, listaSimple } from "./Clientes lista simple.js";
import { Actor, ArbolABB } from "./Actores ABB.js";
import { Categoria, HashTable } from "./Categorias hash table.js";

/** Botones para el ordenamiento de libros */
document.getElementById("btn-ordenar-ascendente").onclick = librosAscendente
document.getElementById("btn-ordenar-descendente").onclick = librosDescendente

/** Botones para el ordenamiento de los acatores */
document.getElementById("btn-inorden").onclick = ordenar_inOrden
document.getElementById("btn-preorden").onclick = ordenar_preOrden
document.getElementById("btn-postorden").onclick = ordenar_postOrden


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




let padre = document.getElementById("vista2-peliculas");
padre.addEventListener("click", (e) => {
    if (e.target.type === "button" && e.target.value){
        let newElement = document.getElementById("mostrar2-movie")
        let newText = ""

        let idPeli = e.target.value
        let datoBuscar = listaPelis.buscarDato(parseInt(idPeli))

        if (datoBuscar !== null){
            document.getElementById("usuario").style.display = "none"
            document.getElementById("mostrar-movie").style.display = "block"
            //console.log(datoBuscar.nombre_pelicula, datoBuscar.id_pelicula, datoBuscar.descripcion)

            newText += `
            <div class="Titulos">
                <h1>${datoBuscar.nombre_pelicula} - ${datoBuscar.id_pelicula}</h1>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered ">
                    <tbody>
                        <tr>
                            <td>
                                Descripcion: ${datoBuscar.descripcion}
    
                                <br>
                                <p>Costo: Q ${datoBuscar.precio_Q}</p>
                                <button type="button" class="btn btn-success btn-rounded "> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Alquilar pelicula </button>
    
                            </td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            `

            newElement.innerHTML = newText

        }else{
            alert("Ocurrió algún error")
        }
    }
})

function librosAscendente() {
    listaPelis.ordenamientoBurbuja_Ascendente()
    listaPelis.mostrarDatos()
}
function librosDescendente() {
    listaPelis.ordenamientoBurbuja_Descendente()
    listaPelis.mostrarDatos()
}


/*

    CARGAR CLIENTES

*/

var lista_Simple = new listaSimple()
export var contenidoClientesJSON = []

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
function cargarActores() {
    alert("Cargando actores...!")
    let nuevoActor = document.getElementById("actores2")
    contenidoActoresJSOM.forEach(e => {
        abb.agregar(new Actor(e.dni,
            e.nombre_actor,
            e.correo,
            e.descripcion))

    })
    nuevoActor.innerHTML = abb.preOrden_Mostrar(abb.raiz)
    //abb.preOrden(abb.raiz)
    abb.graficar(abb.raiz)
}
function ordenar_preOrden() {
    let nuevoActor = document.getElementById("actores2")
    nuevoActor.innerHTML = abb.preOrden_Mostrar(abb.raiz)
    console.clear()
    //abb.preOrden(abb.raiz)
}
function ordenar_inOrden() {
    let nuevoActor = document.getElementById("actores2")
    nuevoActor.innerHTML = abb.inOrden_Mostrar(abb.raiz)
    console.clear()
    //abb.InOrden(abb.raiz)
}
function ordenar_postOrden() {
    let nuevoActor = document.getElementById("actores2")
    nuevoActor.innerHTML = abb.postOrden_Mostrar(abb.raiz)
    console.clear()
    //abb.postOrden(abb.raiz)
}

/**
 * 
 * 
 *      CARGA DE CATEGORIAS
 * 
 * 
 */

var contenidoCategoriasJSON = []
var hastable = new HashTable(20, 10)

window.addEventListener("load", () => {
    document
        .getElementById("fichero-categorias")
        .addEventListener("change", abrirCategoriasJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("btn-cargar-categorias")
        .addEventListener("click", cargarCategorias)
})

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function abrirCategoriasJSON(evento) {
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
function cargarCategorias() {
    alert("Cargando categorias...!")
    let categoria = document.getElementById("categoriaaass")
    let nuewText = ""
    contenidoCategoriasJSON.forEach(e => {
        //console.log(e.id_categoria, e.company)
        hastable.set(e.id_categoria, e.company)

        nuewText += `
        <div class="col-md-3 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src="./Img/img${random(1, 5)}.png">
                </div>
                <h3 class="title">${e.company}</h3>
                <span class="post">${e.id_categoria}</span>
            </div>
        </div>
    `
    })
    hastable.draw()

    categoria.innerHTML = nuewText
}
