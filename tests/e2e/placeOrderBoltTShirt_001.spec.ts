import { test } from "../../src/fixtures/pageFixtures";
import { getOrder, getUser } from "../../src/utils/testDataReader";

const order = getOrder("TC03");
const user = getUser(order.userKey);

test(`TC04 - place an order for ${order.product}`, async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutInformationPage,
  checkoutOverviewPage,
  checkoutCompletePage,
}) => {
  // Login
  await loginPage.goto();
  await loginPage.login(user.username, user.password);
  await inventoryPage.expectLoaded();

  // Add product to cart
  await inventoryPage.addProductToCart(order.product);
  await inventoryPage.header.verifyCartCount("1");

  // Cart
  await inventoryPage.header.openCart();
  await cartPage.expectLoaded();
  await cartPage.verifyProductInCart(order.product);
  await cartPage.clickCheckout();

  // Checkout: Your Information
  await checkoutInformationPage.expectLoaded();
  await checkoutInformationPage.fillCustomerDetails(order.customer);
  await checkoutInformationPage.clickContinue();

  // Checkout: Overview
  await checkoutOverviewPage.expectLoaded();
  await checkoutOverviewPage.verifyProduct(order.product);
  await checkoutOverviewPage.clickFinish();

  // Order confirmation
  await checkoutCompletePage.verifyOrderPlaced();
});
