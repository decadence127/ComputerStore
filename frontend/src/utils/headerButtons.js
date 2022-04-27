import {
  APPOINTMENT_ROUTE,
  FORMS_ROUTE,
  PETS_ROUTE,
  PROCEDURE_ROUTE,
  SIGN_IN_ROUTE,
  USER_HOME_ROUTE,
  SIGN_UP_ROUTE,
  VET_HOME_ROUTE,
  USERS_ROUTE,
  STATS_ROUTE, HOME_ROUTE, CART_ROUTE, COMMODITIES_ROUTE, ORDERS_ROUTE, USER_COMMODITIES_ROUTE,
} from "./routeNames";

export const userButtons = [
  {
    name: "Товары",
    path: USER_COMMODITIES_ROUTE,
  },
  {
    name: "Заказы",
    path: ORDERS_ROUTE,
  },
  {
    name: "Корзина",
    path: CART_ROUTE,
  },
  {
    name: "Аккаунт",
    path: HOME_ROUTE,
  },
  {
    name: "Выйти",
    path: SIGN_IN_ROUTE,
    action: "LOGOUT", // Pay attention to this!! this is how we logout from system and clean the store
  },
];

export const unAuthButtons = [
  {
    name: "Вход",
    path: SIGN_IN_ROUTE,
  },
  {
    name: "Регистрация",
    path: SIGN_UP_ROUTE,
  },
];


export const adminButtons = [
  {
    name: "Товары",
    path: COMMODITIES_ROUTE,
  },
  {

    name: "Пользователи",
    path: USERS_ROUTE,
  },
  ...userButtons.filter((button) => button.name !== "Корзина" && button.name !== "Товары"), // Remove pet button from admin header and add all other buttons from user header
];
