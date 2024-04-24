//``
import cargarFotos from './cargarFotos';
import dataFotos from './data/fotos';
const contenedorCategorias=document.getElementById('categorias');
const galeria=document.getElementById('galeria');
const contendorCarrosel=document.querySelector('.galeria__carousel-slides');
const {fotos}=dataFotos;



contenedorCategorias.addEventListener('click',(e)=>{

    e.preventDefault();

    if(e.target.closest('a')){
        galeria.classList.add('galeria--active');
        document.body.style.overflow='hidden';

       const categoriaActual=e.target.closest('a').dataset.categoria;
       document.querySelector('.galeria__contenedor').dataset.categoria=categoriaActual;

      const {id,nombre,descripcion,ruta}=fotos[categoriaActual][0];

      cargarFotos(id, nombre,descripcion,ruta);



       contendorCarrosel.innerHTML="";

       
       
       fotos[categoriaActual].forEach((foto)=> {

       
       
        const slider=`
                              <a href="#" class="galeria__carousel-slide" >
									<img class="galeria__carousel-image" src="${foto.ruta}" alt="" data-id=${foto.id} />
								</a>
       `;

       contendorCarrosel.innerHTML+=slider;

       });

     ;

       galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }

});