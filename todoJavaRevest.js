//MENU DESPLEGABLE PARA TODO

const iconoMenu = document.querySelector('#icono-menu');
menu = document.querySelector('#menu'); 
const cuerpo = document.querySelector('container');

iconoMenu.addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('active');

    const rutaActual = e.target.getAttribute('src');

        if(rutaActual == 'img/menuhambur.png'){
            e.target.setAttribute('src', 'img/cruzNegra.png'),
            e.target.classList.toggle('sobre')
        }else {
            e.target.setAttribute('src', 'img/menuhambur.png')
        }
})

   // iconoMenu.addEventListener('click', (e) => {
     //   menu.classList.toggle('active');
       // document.body.classList.toggle('opacity');
        

        
    //})
