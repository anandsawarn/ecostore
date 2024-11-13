// Function to add items to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Get the current cart from localStorage or initialize it as an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the product to the cart
        cart.push({ name: productName, price: productPrice });

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} has been added to your cart.`);
    });
});

