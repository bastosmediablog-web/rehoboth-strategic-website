const container = document.getElementById("product-container");

if(!container){
    console.log("Product container not found");
}


function displayProducts(items){

    container.innerHTML = "";

    items.forEach(product => {

        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `

        <img src="${product.image}" 
alt="${product.name}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <p>
        <strong>Category:</strong> ${product.category}
        </p>

        <p>
        <strong>${product.stock ? "✅ In Stock" : "❌ Out of Stock"}</strong>
        </p>

        <h4>${product.price}</h4>

        ${
        product.stock
        ?
        `<button onclick="addToCart(${product.id})">
        Add To Cart
        </button>`
        :
        `<button disabled>
        Out of Stock
        </button>`
        }

        `;

        container.appendChild(productCard);

    });

}


displayProducts(products);
console.log(products);



function filterProducts(category){

    if(category === "All"){

        displayProducts(products);

    } else {

        const filteredProducts = products.filter(
        product => product.category === category
        );

        displayProducts(filteredProducts);

    }

}
function addToCart(productId){

let cart = JSON.parse(localStorage.getItem("cart")) || [];


let product = products.find(
item => item.id === productId
);


let existingProduct = cart.find(
item => item.id === productId
);



if(existingProduct){

existingProduct.quantity++;

}

else{

cart.push({

id: product.id,
name: product.name,
image: product.image,
price: product.price,
quantity: 1

});

}


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert(product.name + " added to cart!");

}