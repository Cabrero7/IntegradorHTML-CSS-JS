import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveModifyElements } from "../services/product";

//boton eliminar
const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
    handlebuttonDelete();
});

const handlebuttonDelete = ()=> {
    handleDeleteProduct();
}

//boton aceptar
const acceptButton = document.getElementById('acceptButton');
    acceptButton.addEventListener('click', () => {
        handleSaveModifyElements();
    });

//boton cancelar
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click',()=>{
    handleCancelButton();
});

const handleCancelButton = ()=>{
    closeModal();
};

//Abrir funciones
export const openModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "flex";
    const buttonDelete = document.getElementById('deleteButton');

    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
    const nombre = document.getElementById('nombre');
    const imagen = document.getElementById('img');
    const precio = document.getElementById('precio');
    const categories = document.getElementById('categoria');

    nombre.value=productoActivo.nombre;
    imagen.value=productoActivo.imagen;
    precio.value=productoActivo.precio;
    categories.value=productoActivo.categories;
    }
};

//Cerrar funcion
export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById('nombre');
    const imagen = document.getElementById('img');
    const precio = document.getElementById('precio');
    const categories = document.getElementById('categoria');

    nombre.value="";
    imagen.value="";
    precio.value=0;
    categories.value="Seleccione una categoria";
};

