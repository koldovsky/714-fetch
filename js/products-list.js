(function() {

    const products = [
        {
            id: 1,
            title: "Baby Yoda",
            img: "img/baby-yoda.svg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 10.99
        },
        {
            id: 2,
            title: "Banana",
            img: "img/banana.svg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 9.99
        },
        {
            id: 3,
            title: "Girl",
            img: "img/girl.svg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 8.99
        },
        {
            id: 4,
            title: "Viking",
            img: "img/viking.svg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 7.99
        }
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <article class="product-card">
              <img class="product-card__image" src="${product.img}" alt="${product.title}"
              />
              <h3 class="product-card__h3">${product.title}</h3>
              <p class="product-card__description">${product.description}</p>
              <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                  Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                  Buy - ${product.price}
                </button>
              </div>
            </article>`;
        }
    } 

    renderProducts(products);

})();