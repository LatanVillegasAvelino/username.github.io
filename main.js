// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en un proyecto real, cargarías esto desde un archivo JSON)
    const productsData = [
        {
            id: 1,
            name: "Smart TV LG 55 pulgadas 4K",
            image: "https://via.placeholder.com/300",
            category: "Electrónica",
            prices: [
                { store: "TiendaA", price: 1299.99, link: "#" },
                { store: "TiendaB", price: 1349.99, link: "#" },
                { store: "TiendaC", price: 1249.99, link: "#" }
            ]
        },
        {
            id: 2,
            name: "Laptop HP Pavilion 15.6 pulgadas",
            image: "https://via.placeholder.com/300",
            category: "Electrónica",
            prices: [
                { store: "TiendaA", price: 899.99, link: "#" },
                { store: "TiendaB", price: 849.99, link: "#" },
                { store: "TiendaC", price: 879.99, link: "#" }
            ]
        },
        {
            id: 3,
            name: "Licuadora Oster 8 velocidades",
            image: "https://via.placeholder.com/300",
            category: "Hogar",
            prices: [
                { store: "TiendaA", price: 89.99, link: "#" },
                { store: "TiendaB", price: 79.99, link: "#" },
                { store: "TiendaC", price: 99.99, link: "#" }
            ]
        },
        {
            id: 4,
            name: "Zapatillas Nike Air Max",
            image: "https://via.placeholder.com/300",
            category: "Moda",
            prices: [
                { store: "TiendaA", price: 129.99, link: "#" },
                { store: "TiendaB", price: 139.99, link: "#" },
                { store: "TiendaC", price: 119.99, link: "#" }
            ]
        }
    ];

    // Cargar productos destacados
    const highlightedProductsContainer = document.getElementById('highlighted-products');
    
    productsData.forEach(product => {
        // Ordenar precios para encontrar el mejor
        const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);
        const bestPrice = sortedPrices[0].price;
        
        // Crear elemento de producto
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        
        let pricesHTML = '';
        product.prices.forEach(priceData => {
            const isBestPrice = priceData.price === bestPrice ? 'best-price' : '';
            pricesHTML += `
                <div class="store-price ${isBestPrice}">
                    <span>${priceData.store}</span>
                    <span>S/ ${priceData.price.toFixed(2)}</span>
                </div>
            `;
        });
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price-comparison">
                ${pricesHTML}
            </div>
            <a href="#" class="view-details">Ver detalles</a>
        `;
        
        highlightedProductsContainer.appendChild(productElement);
    });

    // Funcionalidad de búsqueda
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            alert(`Buscando: ${searchTerm}`);
            // Aquí implementarías la búsqueda real
        }
    });
    
    // Permitir búsqueda al presionar Enter
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
