document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const itemCountElement = document.querySelector('.item-count');
  const totalPriceElement = document.querySelector('.total-price');
  const modalTotalPriceElement = document.querySelector('.modal-total-price');
  const checkoutButton = document.querySelector('.checkout-button');
  const cartItemsList = document.querySelector('.cart-items');

  var itemCount = 0;
  let totalAmount = 0;
  let cartItems = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.item');
      const itemName = item.querySelector('.item-name').textContent;
      const itemCategory = item.querySelector('.item-category').textContent;
      const itemPrice = parseFloat(item.querySelector('.item-price').textContent);

      const existingCartItem = cartItems.find(cartItem => cartItem.name === itemName);

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        cartItems.push({ name: itemName, category: itemCategory, price: itemPrice, quantity: 1 });
      }

      itemCount++;
      totalAmount += itemPrice;

      itemCountElement.textContent = itemCount;
      totalPriceElement.textContent = totalAmount.toFixed(2);

      updateCart();

      
  
      const cartCountElement = document.getElementById('cart-count');
      cartCountElement.textContent = itemCount;

      const cartCountModalElement = document.getElementById('cart-count-modal');
      cartCountModalElement.textContent = itemCount;
    });
  });

  function updateCart() {
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.name} - ${item.category} - $${item.price.toFixed(2)} x ${item.quantity}
        <button class="increase-quantity">+</button>
        <span class="item-quantity">${item.quantity}</span>
        <button class="decrease-quantity">-</button>
        <button class="remove-item">Remove</button>
      `;

      const increaseButton = li.querySelector('.increase-quantity');
      const decreaseButton = li.querySelector('.decrease-quantity');
      const removeButton = li.querySelector('.remove-item');

      increaseButton.addEventListener('click', () => {
        item.quantity++;
        itemCount++;
        totalAmount += item.price;

        itemCountElement.textContent = itemCount;
        totalPriceElement.textContent = totalAmount.toFixed(2);

        updateCart();
      });

      decreaseButton.addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity--;
          itemCount--;
          totalAmount -= item.price;

          itemCountElement.textContent = itemCount;
          totalPriceElement.textContent = totalAmount.toFixed(2);

          updateCart();
        }
      });

      removeButton.addEventListener('click', () => {
        itemCount -= item.quantity;
        totalAmount -= item.price * item.quantity;
        itemCountElement.textContent = itemCount;
        totalPriceElement.textContent = totalAmount.toFixed(2);

        const itemIndex = cartItems.indexOf(item);
        cartItems.splice(itemIndex, 1);

        updateCart();
      });

      cartItemsList.appendChild(li);
    });
  }

  checkoutButton.addEventListener('click', () => {
    modalTotalPriceElement.textContent = totalAmount.toFixed(2);
    
  });

  function toggleCartModal() {
    var cartModal = document.getElementById('cartModal');
    var modal = new bootstrap.Modal(cartModal);
    modal.toggle();
  }


  var cartIcon = document.getElementById('cart-icon');
  cartIcon.addEventListener('click', toggleCartModal);

  let close = document.getElementById("closeModal");
  close.addEventListener("click",function(){
    let now = document.getElementById("cart-count").innerText=0;
  })

});

// Bubble Sort function to sort cards based on item price
function bubbleSort(containerId, ascending) {
  var cardsContainer = document.getElementById(containerId);
  var cards = Array.from(cardsContainer.getElementsByClassName('item'));

  var n = cards.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      var currentCard = cards[j];
      var nextCard = cards[j + 1];

      var currentPrice = parseFloat(currentCard.querySelector('.item-price').textContent);
      var nextPrice = parseFloat(nextCard.querySelector('.item-price').textContent);

      var shouldSwap = ascending ? currentPrice > nextPrice : currentPrice < nextPrice;

      if (shouldSwap) {
        cardsContainer.insertBefore(nextCard, currentCard);
      }
    }
  }
}

// Initialize card data array
let cardData = [];

// Function to initialize card data
function initializeCardData() {
  const cardElements = document.querySelectorAll('.plant_card.item');
  cardData = Array.from(cardElements).map(element => ({
    element: element,
    name: element.querySelector('.item-name').textContent,
    category: element.querySelector('.item-category').textContent,
    price: parseFloat(element.querySelector('.item-price').textContent)
  }));
}

// Function to sort and re-render cards
function renderSortedCards(ascending) {
  cardData.sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
  
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';
  
  cardData.forEach(card => {
    cardContainer.appendChild(card.element);
  });
}

// Initial setup
initializeCardData();

// Event listeners for sorting buttons
document.getElementById('sortButton').addEventListener('click', () => {
  renderSortedCards(false); // Sort from Highest to Lowest
});

document.getElementById('sortDescendingButton').addEventListener('click', () => {
  renderSortedCards(true); // Sort from Lowest to Highest
});


// Select all filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

const cards = document.querySelectorAll('.plant_card');

filterButtons.forEach(button => {
   button.addEventListener('click', () => {
      const selectedCategory = button.dataset.category;

      // Loop 
      cards.forEach(card => {
         const cardCategory = card.dataset.category;

         // If the selected category is "all" or matches the card's category, show the card
         if (selectedCategory === 'all' || selectedCategory === cardCategory) {
            card.style.display = 'block';
         } else {
            card.style.display = 'none';
         }
      });
   });
});





  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
