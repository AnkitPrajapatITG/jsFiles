// Initialize the cart array to hold items
let cart = [];

// Function to add item to the cart
function addToCart(productName, productPrice) {
  // Check if the item already exists in the cart
  const itemIndex = cart.findIndex(item => item.name === productName);

  if (itemIndex !== -1) {
    // Item exists, update the quantity
    cart[itemIndex].quantity += 1;
  } else {
    // Item doesn't exist, add a new item to the cart
    cart.push({
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }
  
  // Update the cart display
  updateCart();
}

// Function to remove item from the cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);

  // Update the cart display
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = ''; // Clear existing cart items
  
  let total = 0;
  
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button class="remove" onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartItemsContainer.appendChild(listItem);
    
    total += item.price * item.quantity;
  });
  
  // Update the total price
  document.getElementById('totalPrice').textContent = `Total: $${total}`;
}
