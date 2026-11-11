/** Login credentials for a Sauce Demo user. */
export interface UserCredentials {
  username: string;
  password: string;
}

/** Shipping details entered on "Checkout: Your Information". */
export interface CustomerDetails {
  firstName: string;
  lastName: string;
  postalCode: string;
}

/** One end-to-end order scenario. */
export interface OrderData {
  testId: string;
  description: string;
  /** Key into the `users` section of the JSON file. */
  userKey: string;
  customer: CustomerDetails;
  /** Product (by visible name) to order. */
  product: string;
}

/** Root shape of test-data/orderData.json */
export interface OrderTestData {
  users: Record<string, UserCredentials>;
  orders: OrderData[];
}
