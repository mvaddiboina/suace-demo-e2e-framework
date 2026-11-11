import { readJsonFile } from "./jsonReader";
import { OrderData, OrderTestData, UserCredentials } from "../types/testData.types";

const testData: OrderTestData =  readJsonFile("orderData.json");

// Returns the username and password for a user, e.g. getUser("standard")
export function getUser(userKey: string): UserCredentials {
  const user = testData.users[userKey];
  if (!user) {
    throw new Error(`User "${userKey}" not found in orderData.json`);
  }
  return user;
}

// Returns the order details for a test, e.g. getOrder("TC01")
export function getOrder(testId: string): OrderData {
  const order = testData.orders.find((item) => item.testId === testId);
  if (!order) {
    throw new Error(`Order "${testId}" not found in orderData.json`);
  }
  return order;
}
