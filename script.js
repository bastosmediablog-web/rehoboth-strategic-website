 const container = document.getElementById("product-container");

// Display Products
function displayProducts(items) {

    if (!container) return;

    container.innerHTML = "";

    items.forEach(product => {

        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p><strong>Category:</strong> ${product.category}</p>

            <p>
                <strong>
                    ${product.stock ? "✅ In Stock" : "❌ Out of Stock"}
                </strong>
            </p>

            <h4>${product.price}</h4>

            ${
                product.stock
                ? `<button onclick="addToCart(${product.id})">
                    Add To Cart
                  </button>`
                : `<button disabled>
                    Out of Stock
                  </button>`
            }
        `;

        container.appendChild(productCard);

    });

}

// Load products when page opens
if (typeof products !== "undefined") {
    displayProducts(products);
}


// Filter Products
function filterProducts(category) {

    if (category === "All") {

        displayProducts(products);

    } else {

        const filteredProducts = products.filter(product =>
            product.category === category
        );

        displayProducts(filteredProducts);

    }

}


// Add To Cart
function addToCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");

}


// Update Cart Counter
function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(product => {

        count += product.quantity;

    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {

        cartCount.textContent = count;

    }

}

// Run cart counter when page loads
updateCartCount();
