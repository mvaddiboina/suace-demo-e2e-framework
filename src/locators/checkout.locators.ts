/** Checkout step one - "Checkout: Your Information" */
export const CheckoutInformationLocators = {
  firstName: {
    description: "First name input",
    primary: "#first-name",
    fallback: ["[data-test='firstName']", "input[placeholder='First Name']"],
  },

  lastName: {
    description: "Last name input",
    primary: "#last-name",
    fallback: ["[data-test='lastName']", "input[placeholder='Last Name']"],
  },

  postalCode: {
    description: "Zip / postal code input",
    primary: "#postal-code",
    fallback: ["[data-test='postalCode']", "input[placeholder='Zip/Postal Code']"],
  },

  continueButton: {
    description: "Continue button",
    primary: "#continue",
    fallback: ["[data-test='continue']", "input[value='Continue']"],
  },

  cancelButton: {
    description: "Cancel button",
    primary: "#cancel",
    fallback: ["[data-test='cancel']"],
  },

  errorMessage: {
    description: "Validation error message",
    primary: "h3[data-test='error']",
    fallback: [".error-message-container h3"],
  },
};

/** Checkout step two - "Checkout: Overview" */
export const CheckoutOverviewLocators = {
  cartItem: {
    description: "Single order line item",
    primary: "[data-test='inventory-item']",
    fallback: [".cart_item"],
  },

  itemName: {
    description: "Product name inside an order line item",
    primary: "[data-test='inventory-item-name']",
    fallback: [".inventory_item_name"],
  },

  itemPrice: {
    description: "Product price inside an order line item",
    primary: "[data-test='inventory-item-price']",
    fallback: [".inventory_item_price"],
  },

  paymentInfo: {
    description: "Payment information value",
    primary: "[data-test='payment-info-value']",
    fallback: [".summary_info .summary_value_label"],
  },

  shippingInfo: {
    description: "Shipping information value",
    primary: "[data-test='shipping-info-value']",
    fallback: [".summary_info .summary_value_label"],
  },

  subtotal: {
    description: "Item total (before tax)",
    primary: "[data-test='subtotal-label']",
    fallback: [".summary_subtotal_label"],
  },

  tax: {
    description: "Tax amount",
    primary: "[data-test='tax-label']",
    fallback: [".summary_tax_label"],
  },

  total: {
    description: "Grand total",
    primary: "[data-test='total-label']",
    fallback: [".summary_total_label"],
  },

  finishButton: {
    description: "Finish button",
    primary: "#finish",
    fallback: ["[data-test='finish']"],
  },

  cancelButton: {
    description: "Cancel button",
    primary: "#cancel",
    fallback: ["[data-test='cancel']"],
  },
};

/** Checkout complete - "Checkout: Complete!" */
export const CheckoutCompleteLocators = {
  completeHeader: {
    description: "Order confirmation header",
    primary: "[data-test='complete-header']",
    fallback: [".complete-header"],
  },

  completeText: {
    description: "Order confirmation body text",
    primary: "[data-test='complete-text']",
    fallback: [".complete-text"],
  },

  ponyExpressImage: {
    description: "Pony express confirmation image",
    primary: "[data-test='pony-express']",
    fallback: [".pony_express"],
  },

  backHomeButton: {
    description: "Back Home button",
    primary: "#back-to-products",
    fallback: ["[data-test='back-to-products']"],
  },
};
