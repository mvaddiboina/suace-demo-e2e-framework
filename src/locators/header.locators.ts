export const HeaderLocators = {
  appLogo: {
    description: "Swag Labs application logo",
    primary: ".app_logo",
    fallback: [".header_label .app_logo"],
  },

  pageTitle: {
    description: "Secondary header page title (Products / Your Cart / Checkout ...)",
    primary: "[data-test='title']",
    fallback: [".header_secondary_container .title"],
  },

  cartLink: {
    description: "Shopping cart icon link",
    primary: "[data-test='shopping-cart-link']",
    fallback: [".shopping_cart_link"],
  },

  cartBadge: {
    description: "Shopping cart item-count badge",
    primary: "[data-test='shopping-cart-badge']",
    fallback: [".shopping_cart_badge"],
  },

  menuButton: {
    description: "Burger menu open button",
    primary: "#react-burger-menu-btn",
    fallback: ["button:has-text('Open Menu')"],
  },

  logoutLink: {
    description: "Logout link in the side menu",
    primary: "#logout_sidebar_link",
    fallback: ["[data-test='logout-sidebar-link']"],
  },

  resetAppStateLink: {
    description: "Reset App State link in the side menu",
    primary: "#reset_sidebar_link",
    fallback: ["[data-test='reset-sidebar-link']"],
  },
};
