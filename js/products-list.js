(async function() {

    let rate = 1;
    let currencies;
    const response = await fetch('api/products.json');
    const products = await response.json();
    
    renderProducts();

    // try {
    //   const response = await fetch('api1/products.json');
    //   const products = await response.json();
    //   renderProducts(products);
    // } catch (err) {
    //   console.log(err);
    // }

    // fetch('api/products.json')
    //   .then( response => response.json() )
    //   .then( products => renderProducts(products) )
    //   .catch( err => console.log(err) );

    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     const products = JSON.parse(xhr.responseText);
    //     renderProducts(products);
    //   }
    // }
    // xhr.open('get', 'api/products.json', true);
    // xhr.send();

    function renderProducts() {
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
                  Buy - ${(product.price * rate).toFixed(2)}
                </button>
              </div>
            </article>`;
        }
    } 

    async function convertCurrency() {
      const convertTo = document.querySelector('.currency').value;
      if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
      }
      rate = currencies.rates[convertTo];
      renderProducts();
    }

    document.querySelector('.convert').addEventListener('click', convertCurrency);

})();