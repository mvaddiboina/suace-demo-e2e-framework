export const LoginLocators = {
  username: {
    description: "User name input field",
    primary: "#user-name",
    fallback: ["input[placeholder='Username']", "input[data-test='username']"],
  },

  password: {
    description: "Password input field",
    primary: "#password",
    fallback: ["input[placeholder='Password']", "input[data-test='password']"],
  },

  loginButton: {
    description: "Login button",
    primary: "#login-button",
    fallback: ["input[type='submit']", "input[value='Login']"],
  },

  error: {
    description: "Error message close (X) button",
    primary: ".error-button",
    fallback: ["button[data-test='error-button']"],
  },

  errorMessage: {
    description: "Error message text",
    primary: "h3[data-test='error']",
    fallback: [".error-message-container h3"],
  },
};
