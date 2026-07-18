const container = document.getElementById("product-container");


function displayProducts(items){

container.innerHTML="";


items.forEach(product=>{


let stockStatus = product.stock 
? "✅ In Stock" 
: "❌ Out of Stock";


let button = product.stock
? `<button onclick="addToCart(${product.id})">
Add To Cart
</button>`
:
`<button disabled>
Out of Stock
</button>`;


 container.innerHTML += `

<div class="product-card">

 <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300">

<h3>${product.name}</h3>

<p>${product.description}</p>

<p>
<strong>Category:</strong> ${product.category}
</p>

<p>
<strong>${stockStatus}</strong>
</p>

<h4>${product.price}</h4>

${button}

</div>

`;


});


}



displayProducts(products);



function filterProducts(category){

if(category=="All"){

displayProducts(products);

}

else{

let filtered = products.filter(product=>product.category == category);

displayProducts(filtered);

}

}