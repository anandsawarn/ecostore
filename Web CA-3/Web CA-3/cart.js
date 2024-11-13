// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - &#8377;${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh the cart display
}

// Display cart items when the page loads
displayCartItems();

// Placeholder function for checkout
function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = []; // Clear the cart
        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
        displayCartItems(); // Refresh the cart display
    } else {
        alert("Your cart is empty!");
    }
}