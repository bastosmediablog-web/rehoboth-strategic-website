let cart = JSON.parse(localStorage.getItem("cart")) || [];


function displayCart(){

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


cartItems.innerHTML = "";


if(cart.length === 0){

cartItems.innerHTML = "<p>Your cart is empty.</p>";
cartTotal.innerHTML = "";

return;

}



let total = 0;


cart.forEach((product, index)=>{


total += product.quantity;



cartItems.innerHTML += `

<div class="cart-item">

<img src="${product.image}" 
alt="${product.name}">


<h3>${product.name}</h3>


<p>Quantity: ${product.quantity}</p>


<button onclick="increaseQuantity(${index})">
+
</button>


<button onclick="decreaseQuantity(${index})">
-
</button>


<button onclick="removeFromCart(${index})">
Remove
</button>


</div>

`;

});


cartTotal.innerHTML = 
"Items in cart: " + total;


}



function increaseQuantity(index){

cart[index].quantity++;

saveCart();

}



function decreaseQuantity(index){

if(cart[index].quantity > 1){

cart[index].quantity--;

}

saveCart();

}



function removeFromCart(index){

cart.splice(index,1);

saveCart();

}



function saveCart(){

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}



function checkoutWhatsApp(){

let message = "Hello Rehoboth Strategic LLC, I want to order:%0A%0A";


cart.forEach(product=>{

message += 
product.name + 
" - Quantity: " + 
product.quantity + 
"%0A";

});


window.open(
"https://wa.me/YOURNUMBER?text=" + message
);

}



displayCart();