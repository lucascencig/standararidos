//MENU DESPLEGABLE PARA TODO

const iconoMenu =     document.querySelector('#icono-menu');
menu =                document.querySelector('#menu'); 
const cuerpo =        document.querySelector('container');


    iconoMenu.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');
       

        

        const rutaActual = e.target.getAttribute('src');

        if(rutaActual == 'img/menuhambur.png'){
            e.target.setAttribute('src', 'img/cruzNegra.png'),
            e.target.classList.toggle('sobre')
        }else {
            e.target.setAttribute('src', 'img/menuhambur.png')
        }
    })






//BARRA DE BUSQUEDA

document.getElementById('#inputBuscar').addEventListener('click', mostrarBuscador);
document.getElementById('#fondoOscuroBusqueda').addEventListener('click', ocultarBuscador);

const fondoNegro =    document.getElementById('#fondoOscuroBusqueda');
const inputBuscar =   document.getElementById('#inputBuscar');
const boxSearch =     document.getElementById('#boxSearch');




function mostrarBuscador(){
    fondoOscuroBusqueda.style.display = "block";
    inputBuscar.focus();

}




//ocultar Buscador:

function ocultarBuscador(){
    boxSearch.style.display = "none";
    fondoOscuroBusqueda.style.display = "none";
    inputBuscar.value = "";

}

//filtros de busqueda:

document.getElementsById('#inputBuscar').addEventListener('keyup', buscador_interno);

function buscador_interno(){
    filtro = inputBuscar.value.toUpperCase();
    li = boxSearch.getElementsByTagName("li");

    //filtrado de elementos li:

    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filtro) > -1){
            li[i].style.display = "";
        }else {
            li[i].style.display = "none";
        }
    }

}



// INFO DESPLEGABLE PRODUCTOS EN PREPARACION DE SUPERFICIE

//tacho 1
const info = document.querySelector('#tacho');
ficha = document.querySelector('#fichaTecnica');
correrAbajo = document.querySelector('#gridtachosDos');
foot = document.querySelector('#foot');


info.addEventListener('click', (e) => {
    ficha.classList.toggle('mostrar');
    correrAbajo.classList.toggle('correrAbajo');
   
})

//tacho 2
const infoDos = document.querySelector('#tachoDos');
fichaDos = document.querySelector('#fichaTecnicaDos');
correrAbajo = document.querySelector('#gridtachosDos');



infoDos.addEventListener('click', (e) => {
    fichaDos.classList.toggle('mostrarDos');
    correrAbajo.classList.toggle('correrAbajo');
    //foot.classList.toggle('abajo');
})


//tacho 3
const infoTres = document.querySelector('#tachoTres');
fichaTres = document.querySelector('#fichaTecnicaTres');
foot = document.querySelector('#foot');

infoTres.addEventListener('click', (e) => {
    fichaTres.classList.toggle('mostrarTres');
    correrAbajo.classList.toggle('correrAbajo');
    //foot.classList.toggle('abajo');
})


//tacho 4
const infoCuatro = document.querySelector('#tachoCuatro');
fichaCuatro = document.querySelector('#fichaTecnicaCuatro');
foot = document.querySelector('#foot');

infoCuatro.addEventListener('click', (e) => {
    fichaCuatro.classList.toggle('mostrarCuatro');
    foot.classList.toggle('abajo');
})


//tacho 5
const infoCinco = document.querySelector('#tachoCinco');
fichaCinco = document.querySelector('#fichaTecnicaCinco');
foot = document.querySelector('#foot');

infoCinco.addEventListener('click', (e) => {
    fichaCinco.classList.toggle('mostrarCinco');
    foot.classList.toggle('abajo');
})

