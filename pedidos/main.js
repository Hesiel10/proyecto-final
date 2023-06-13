function agregarAlCarrito(tipo) {
    const carrito = document.getElementById('carrito');
    const li = document.createElement('li');
    li.textContent = tipo;
    carrito.appendChild(li);
}

