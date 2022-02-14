const views = document.getElementById("views");
const titulo = document.getElementById("titulo");
const linkFooter = document.getElementById("link_a");

/* Agregar el hover*/
const AddHover = () => { 
    views.classList.add("card__cont__view-hover");
}

/* Remover el hover*/
const RemoveHover = () => {
    views.classList.remove("card__cont__view-hover");
}

titulo.addEventListener("mouseenter", AddHover);
titulo.addEventListener("mouseout", RemoveHover);

linkFooter.addEventListener("mouseenter", AddHover);
linkFooter.addEventListener("mouseout", RemoveHover);
