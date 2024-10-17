
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css';

// Application
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setproductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

    handleGetProductToStore();
    renderCategories();

    // Header
    const buttonAdd = document.getElementById('buttonAddElement');
        buttonAdd.addEventListener('click', () => {
            openModal();
        });

    // Button search
    const buttonSearch = document.getElementById('buttonSearch');
        buttonSearch.addEventListener('click', () => {
            handleSearchProductByName();
        });
    

