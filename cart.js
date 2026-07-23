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



function checkoutWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value.trim();
    const zipcode = document.getElementById("zipcode").value.trim();
    const notes = document.getElementById("notes").value.trim();

    if (
        !fullname ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !state ||
        !country
    ) {
        alert("Please complete all required customer information.");
        return;
    }

    let message = "🛒 *NEW ORDER*%0A%0A";

    message += "*Customer Information*%0A";
    message += "Name: " + fullname + "%0A";
    message += "Email: " + email + "%0A";
    message += "Phone: " + phone + "%0A";
    message += "Address: " + address + "%0A";
    message += "City: " + city + "%0A";
    message += "State: " + state + "%0A";
    message += "Country: " + country + "%0A";

    if (zipcode !== "") {
        message += "ZIP Code: " + zipcode + "%0A";
    }

    message += "%0A*Order Items*%0A";

    let totalItems = 0;

    cart.forEach(product => {
        message += "• " + product.name + " x " + product.quantity + "%0A";
        totalItems += product.quantity;
    });

    message += "%0ATotal Items: " + totalItems + "%0A";

    if (notes !== "") {
        message += "%0A*Order Notes*%0A";
        message += notes + "%0A";
    }

    message += "%0AThank you!";

    window.open(
        "https://wa.me/12109848515?text=" + message,
        "_blank"
    );
} 
 



displayCart();
function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = 0;


cart.forEach(product => {

count += product.quantity;

});


let cartCount = document.getElementById("cart-count");


if(cartCount){

cartCount.innerHTML = count;

}

}


updateCartCount();
