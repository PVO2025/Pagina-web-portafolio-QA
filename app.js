// Mostrar/Ocultar descripción del proyecto
function toggleDetails(button) {
    var details = button.nextElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
        button.innerText = "Mostrar menos";
    } else {
        details.style.display = "none";
        button.innerText = "Mostrar más";
    }
}

// Abrir modal de imagen
function openModal(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = image.src;
}

// Cerrar modal
function closeModal() {
 var modal = document.getElementById("modal");
 modal.style.display = "none";
}



