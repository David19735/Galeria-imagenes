const galeria=document.getElementById('galeria');


const cargarFotos=(id, nombre,descripcion,ruta)=>{

    document.querySelector('.galeria__imagen').src=ruta;
    document.querySelector('.galeria__titulo').innerHTML=nombre;
    document.querySelector('.galeria__descripcion-imagen-activa').innerHTML=descripcion;



}

export default cargarFotos;