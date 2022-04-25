// Export all routes to one utils file like this pls, its easier to read

export const API_URL = process.env.REACT_APP_API_URL; // From .env file in root directory

export const BASE_URL = `${API_URL}/`;

export const SIGN_IN_URL = `${API_URL}/signIn/`;
export const SIGN_UP_URL = `${API_URL}/signUp/`;
export const USER_URL = `${API_URL}/users/`;
export const CART_URL = `${API_URL}/cart/`;
export const COMMODITIES_URL = `${API_URL}/commodities/`;
export const ORDER_URL = `${API_URL}/order/`;

