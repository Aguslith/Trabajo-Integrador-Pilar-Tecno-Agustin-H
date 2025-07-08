// Array para guardar recetas
const recetas = [];

// Elementos del DOM
const formulario = document.getElementById('formularioReceta');
const inputNombre = document.getElementById('nombreReceta');
const inputIngredientes = document.getElementById('ingredientesReceta');
const contenedor = document.getElementById('contenedorRecetas');
const contadorRecetas = document.getElementById('totalRecetas');

// Función para mostrar recetas
const mostrarRecetas = () => {
    // Creamos las tarjetas de recetas
    contenedor.innerHTML = recetas.map((receta, indice) => `
        <div class="tarjeta-receta">
            <h3>${receta.nombre}</h3>
            <p><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
            <button class="boton-eliminar" onclick="eliminarReceta(${indice})">Eliminar</button>
        </div>
    `).join('');
    
    // Actualizamos el contador
    contadorRecetas.textContent = `Total recetas: ${recetas.length}`;
};

// Evento para el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = inputNombre.value.trim();
    const ingredientes = inputIngredientes.value.trim();
    
    if (nombre && ingredientes) {
        // Agregamos nueva receta
        recetas.push({
            nombre: nombre,
            ingredientes: ingredientes
        });
        
        // Mostramos las recetas actualizadas
        mostrarRecetas();
        
        // Limpiamos los campos del formulario
        inputNombre.value = '';
        inputIngredientes.value = '';
    }
});

// Función para eliminar receta
window.eliminarReceta = (indice) => {
    recetas.splice(indice, 1);
    mostrarRecetas();
};

// Mostrar recetas al cargar la página
mostrarRecetas();