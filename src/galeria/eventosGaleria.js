import cerrarGaleria from "./cerrarGaleria";
import dataFotos from './../data/fotos';
import cargarFotos from './../cargarFotos';
const {fotos}=dataFotos;

const galeria=document.getElementById('galeria');



galeria.addEventListener('click',(e)=>{

    const boton=e.target.closest('button');

    if(boton?.dataset?.accion==="cerrar-galeria"){
        
        cerrarGaleria();
    }

    else if(e.target.closest('img')?.dataset?.id){

        const categoria=document.querySelector('.galeria__contenedor').dataset.categoria;
        const idFotoActual=parseInt(e.target.closest('img')?.dataset?.id);



        fotos[categoria].forEach((foto)=> {

            if(idFotoActual===foto.id){
                const {id,descripcion,nombre,ruta}=foto;
                
                cargarFotos(id, nombre,descripcion,ruta);


            }

        });

        
    }

});