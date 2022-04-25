import {

  SIGN_IN_ROUTE,
  USER_HOME_ROUTE,
  SIGN_UP_ROUTE,

  USERS_ROUTE,
  STATS_ROUTE, HOME_ROUTE, COMMODITIES_ROUTE, ORDERS_ROUTE, CART_ROUTE,
} from "./routeNames";

export const userButtons = [
  {
    name: "Commodities",
    path: COMMODITIES_ROUTE,
  },
  {
    name: "Orders",
    path: ORDERS_ROUTE,
  },
  {
    name: "Cart",
    path: CART_ROUTE,
  },
  {
    name: "Account",
    path: HOME_ROUTE,
  },
  {
    name: "Logout",
    path: SIGN_IN_ROUTE,
    action: "LOGOUT", // Pay attention to this!! this is how we logout from system and clean the store
  },
];

export const unAuthButtons = [
  {
    name: "Sign In",
    path: SIGN_IN_ROUTE,
  },
  {
    name: "Sign Up",
    path: SIGN_UP_ROUTE,
  },
];
export const adminButtons = [
  {
    name: "Stats",
    path: STATS_ROUTE,
  },
  {
    name: "Users",
    path: USERS_ROUTE,
  },
  ...userButtons.filter((button) => button.name !== "Cart"), // Remove pet button from admin header and add all other buttons from user header
];
