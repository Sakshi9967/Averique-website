fetch("/api/products")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");

      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      `;

      container.appendChild(div);
    });
  });

function addToCart(name) {
  alert(name + " added to cart!");
}