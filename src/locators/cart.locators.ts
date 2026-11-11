export const CartLocators = {
  cartList: {
    description: "Cart items list",
    primary: "[data-test='cart-list']",
    fallback: [".cart_list"],
  },

  cartItem: {
    description: "Single cart line item",
    primary: "[data-test='inventory-item']",
    fallback: [".cart_item"],
  },

  itemName: {
    description: "Product name inside a cart line item",
    primary: "[data-test='inventory-item-name']",
    fallback: [".inventory_item_name"],
  },

  itemPrice: {
    description: "Product price inside a cart line item",
    primary: "[data-test='inventory-item-price']",
    fallback: [".inventory_item_price"],
  },

  itemQuantity: {
    description: "Quantity inside a cart line item",
    primary: "[data-test='item-quantity']",
    fallback: [".cart_quantity"],
  },

  removeButton: {
    description: "'Remove' button inside a cart line item",
    primary: "button[data-test^='remove']",
    fallback: ["button:has-text('Remove')"],
  },

  continueShoppingButton: {
    description: "Continue Shopping button",
    primary: "#continue-shopping",
    fallback: ["[data-test='continue-shopping']"],
  },

  checkoutButton: {
    description: "Checkout button",
    primary: "#checkout",
    fallback: ["[data-test='checkout']"],
  },
};
