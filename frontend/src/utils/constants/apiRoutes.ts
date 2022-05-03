export const API_ROUTE = `${process.env.REACT_APP_API_ROUTE}ComputerStore`;

//AUTH API
export const REFRESH_ROUTE = `${API_ROUTE}/refresh`;
export const LOGIN_ROUTE = `${API_ROUTE}/signIn`;
export const LOGOUT_ROUTE = `${API_ROUTE}/signOut`;
export const REGISTER_ROUTE = `${API_ROUTE}/signUp`;

// ACCOUNT API
export const ACCOUNTS_ROUTE = `${API_ROUTE}/account/`;
export const ACCOUNT_ROUTE = `${API_ROUTE}/account/:id`;
export const CHANGE_ROLE_ROUTE = `${API_ROUTE}/account/role/:id`;
export const GET_USERS_ROUTE = `${API_ROUTE}/account/users`;
export const GET_ADMINS_ROUTE = `${API_ROUTE}/account/admins`;

//ADDRESS API
export const ADDRESSES_ROUTE = `${API_ROUTE}/address/`;
export const ADDRESS_ROUTE = `${API_ROUTE}/address/:id`;

//CART API
export const CART_URL = `${API_ROUTE}/cart/`;
export const GET_CART_ROUTE = `${API_ROUTE}/cart/user/:id`;
export const CREATE_CART_ROUTE = `${API_ROUTE}/cart/`;
export const EDIT_CART_ROUTE = `${API_ROUTE}/cart/:id`;

//COMMODITY API
export const COMMODITIES_ROUTE = `${API_ROUTE}/commodity/`;
export const COMMODITY_ROUTE = `${API_ROUTE}/commodity/:id`;

//ORDER API
export const ORDERS_ROUTE = `${API_ROUTE}/order/`;
export const ORDER_ROUTE = `${API_ROUTE}/order/:id`;
