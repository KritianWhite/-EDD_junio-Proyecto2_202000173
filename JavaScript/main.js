import { contenidoClientesJSON } from "./Carga masiva.js";

/** Funcionalidades de ingresar y cerrar sesion */
document.getElementById("btn-ingresar").onclick = login
document.getElementById("cerrar-sesion").onclick = cerrarSesion
document.getElementById("cerrar-sesion2").onclick = cerrarSesion

/** Funcionalidades para los botones de la navbar del administrador */
document.getElementById("nav-carga-masiva-admin").onclick = mostrarCargaMasiva
document.getElementById("grafo-peliculas").onclick = mostrarGrafo_AVL
document.getElementById("grafo-clientes").onclick = mostrarGrafo_LinkedList
document.getElementById("grafo-actores").onclick = mostrarGrafo_ABB
document.getElementById("grafo-categorias").onclick = mostrarGrafo_HashTable
document.getElementById("nav-blockchain").onclick = mostrarBlockChain

/** Botones de descarga para los grafos */
document.getElementById("btn-download-avl").onclick = descargarGrafo_AVL
document.getElementById("btn-download-linkedlist").onclick = descargarGrafo_LinkedList
document.getElementById("btn-download-abb").onclick = descargarGrafo_ABB
document.getElementById("btn-download-hashtable").onclick = descargarGrafo_HashTable

/** Funcionalidades para los botones de la navbar del usuario */
document.getElementById("vista-peliculas").onclick = mostrarPeliculas
document.getElementById("vista-actores").onclick = mostrarActores
document.getElementById("vista-categorias").onclick = mostrarCategorias


var user, pass, check, bolean

function login() {
    bolean = false
    user = document.getElementById("usser").value
    pass = document.getElementById("password").value
    check = document.getElementById("check-box").checked

    if (check) {
        bolean = true
    }

    if (user === "EDD" && pass === "123" && bolean === true) {
        document.getElementById("login").style.display = "none"
        document.getElementById("navbar-administrador").style.display = "block"
        document.getElementById("administrador").style.display = "block"
        document.getElementById("mostrar-grafo-avl").style.display = "none"
        document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
        document.getElementById("mostrar-grafo-abb").style.display = "none"
        document.getElementById("mostrar-grafo-hashtable").style.display = "none"
        document.getElementById("mostrar-blockchain").style.display = "none"
        document.getElementById("navbar-usuario").style.display = "none"
        document.getElementById("usuario").style.display = "none"
        document.getElementById("actores").style.display = "none"
        document.getElementById("categorias").style.display = "none"
    }
    else if (user === "User1" && pass === "123" && bolean === false) {
        document.getElementById("login").style.display = "none"
        document.getElementById("navbar-administrador").style.display = "none"
        document.getElementById("administrador").style.display = "none"
        document.getElementById("mostrar-grafo-avl").style.display = "none"
        document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
        document.getElementById("mostrar-grafo-abb").style.display = "none"
        document.getElementById("mostrar-grafo-hashtable").style.display = "none"
        document.getElementById("mostrar-blockchain").style.display = "none"
        document.getElementById("navbar-usuario").style.display = "block"
        document.getElementById("usuario").style.display = "block"
        document.getElementById("actores").style.display = "none"
        document.getElementById("categorias").style.display = "none"

    }
    else {
        contenidoClientesJSON.forEach(e => {
            if (user === e.nombre_usuario && pass === e.contrasenia) {
                document.getElementById("login").style.display = "none"
                document.getElementById("navbar-administrador").style.display = "none"
                document.getElementById("administrador").style.display = "none"
                document.getElementById("mostrar-grafo-avl").style.display = "none"
                document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
                document.getElementById("mostrar-grafo-abb").style.display = "none"
                document.getElementById("mostrar-grafo-hashtable").style.display = "none"
                document.getElementById("mostrar-blockchain").style.display = "none"
                document.getElementById("navbar-usuario").style.display = "block"
                document.getElementById("usuario").style.display = "block"
                document.getElementById("actores").style.display = "none"
                document.getElementById("categorias").style.display = "none"
            }
        })
        alert("¡Credenciales incorrectas!")
    }

    document.getElementById("password").value = ""
    document.getElementById("check-box").checked = false
}


function cerrarSesion() {
    document.getElementById("login").style.display = "block"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"

    document.getElementById("usser").value = ""
    document.getElementById("password").value = ""
    document.getElementById("check-box").checked = false
}
/**
 * 
 * Mostrando vistas de la navbar del administrador
 * 
 */

function mostrarCargaMasiva(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "block"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}

function mostrarGrafo_AVL(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "block"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}

function mostrarGrafo_LinkedList(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "block"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}

function mostrarGrafo_ABB(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "block"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}

function mostrarGrafo_HashTable(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "block"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}

function mostrarBlockChain(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "block"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}
/**
 * 
 * Mostrando vistas de la navbar de Usuario
 * 
 */
function mostrarPeliculas(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "block"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "none"
}

function mostrarActores(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "block"
    document.getElementById("categorias").style.display = "none"
}

function mostrarCategorias(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("mostrar-grafo-linkedlist").style.display = "none"
    document.getElementById("mostrar-grafo-abb").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("mostrar-blockchain").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("actores").style.display = "none"
    document.getElementById("categorias").style.display = "block"
}
/**
 * 
 * 
 *          DESCARGA DE GRAFOS
 * 
 * 
 */

 function descargarGrafo_AVL() {
    html2canvas($('#descargar-AVL')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}

function descargarGrafo_LinkedList(){
    html2canvas($('#descargar-linkedlist')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}

function descargarGrafo_ABB(){
    html2canvas($('#descargar-ABB')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}


function descargarGrafo_HashTable(){
    html2canvas($('#descargar-HashTable')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}




