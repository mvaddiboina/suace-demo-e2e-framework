export const InventoryLocators = {
  inventoryContainer: {
    description: "Inventory (products) list container",
    primary: "[data-test='inventory-list']",
    fallback: [".inventory_list"],
  },

  inventoryItem: {
    description: "Single product card",
    primary: "[data-test='inventory-item']",
    fallback: [".inventory_item"],
  },

  itemName: {
    description: "Product name inside a product card",
    primary: "[data-test='inventory-item-name']",
    fallback: [".inventory_item_name"],
  },

  itemPrice: {
    description: "Product price inside a product card",
    primary: "[data-test='inventory-item-price']",
    fallback: [".inventory_item_price"],
  },

  addToCartButton: {
    description: "'Add to cart' button inside a product card",
    primary: "button[data-test^='add-to-cart']",
    fallback: ["button:has-text('Add to cart')"],
  },

  removeButton: {
    description: "'Remove' button inside a product card",
    primary: "button[data-test^='remove']",
    fallback: ["button:has-text('Remove')"],
  },
};
