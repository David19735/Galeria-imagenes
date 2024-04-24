import dataCategorias from "./data/categorias";
const {categorias}=dataCategorias;
const contenedorCategorias=document.getElementById('categorias');

//``



categorias.forEach((categoria)=>{

    

    const plantilla=`
                      <a href="#" class="categoria" data-categoria="${categoria.id}">
						<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
						<div class="categoria__datos">
							<p class="categoria__nombre">${categoria.nombre}</p>
							<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
						</div>
					    </a>
    `;

    contenedorCategorias.innerHTML+=plantilla;

    
})


