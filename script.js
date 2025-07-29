let cartItems = [];

function addToCart(itemName) {
  cartItems.push(itemName);
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = "Item "+(index + 1) + ":  " + item;
    cartList.appendChild(li);
  });
}