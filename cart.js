// let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
function addToCart(button) {
    const productSection = button.parentElement;
    const productName = productSection.querySelector('h6 a').innerText;
    const productPrice = productSection.querySelector('.price').innerText.replace(';-', '');

    const product = {
        name: productName,
        price: productPrice,
        quantity: 1,
        image: productSection.querySelector('img').src,
    };

    const existingProductIndex = cart.findIndex((item) => item.name === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} har lagts till i kundvagnen!`);
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartItemsContainer = document.getElementById('cart');
    let totalPrice = 0;

    cartItemsContainer.innerHTML = ''; // Rensa tabellen först

    cart.forEach((product, index) => {
        const productTotalPrice = parseInt(product.price) * product.quantity;
        totalPrice += productTotalPrice;

        const row = `
            <tr>
                <td><img src="${product.image}" alt="Produktbild" width="50"></td>
                <td>${product.name}</td>
                <td><input type="number" value="${product.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td>${product.price}</td>
                <td>${productTotalPrice}</td>
                <td><button class="btn delete" onclick="removeFromCart(${index})">Ta bort</button></td>
            </tr>
        `;
        cartItemsContainer.innerHTML += row;
    });

    document.getElementById('total-price').innerHTML = `<strong>Totalt:</strong> ${totalPrice} SEK`;
}

function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

window.onload = displayCart;