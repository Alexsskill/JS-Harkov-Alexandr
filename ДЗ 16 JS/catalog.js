class Catalog {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.init();
    }

    async loadProducts() {
        try {
            const response = await fetch('products.json');
            this.products = await response.json();
            this.filteredProducts = [...this.products];
            this.renderCatalog();
        } catch (error) {
            console.error('Ошибка при загрузке товаров:', error);
        }
    }

    initEvents() {
        const categoryFilter = document.getElementById('categoryFilter');
        const searchInput = document.getElementById('searchInput');

        categoryFilter.addEventListener('change', () => {
            const selectedCategory = categoryFilter.value;
            if (selectedCategory === 'all') {
                this.filteredProducts = [...this.products];
            } else {
                this.filteredProducts = this.products.filter(
                    (product) => product.category === selectedCategory
                );
            }
            this.renderCatalog();
        });

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            this.filteredProducts = this.products.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
            this.renderCatalog();
        });
    }

    renderCatalog() {
        const catalogDiv = document.getElementById('catalog');
        catalogDiv.innerHTML = '';

        if (this.filteredProducts.length === 0) {
            catalogDiv.innerHTML = '<p>Товары не найдены.</p>';
            return;
        }

        this.filteredProducts.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            productDiv.innerHTML = `
          <img src="${product.preview}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Цена: ${product.price} руб.</p>
          <p>Категория: ${product.category}</p>
        `;

            catalogDiv.appendChild(productDiv);
        });
    }

    init() {
        this.loadProducts();
        this.initEvents();
    }
}

const catalog = new Catalog();