// Export all routes to one utils file like this pls, its easier to read

// export const API_URL = process.env.REACT_APP_API_URL; // From .env file in root directory
export const API_URL = "http://localhost:8080/ComputerStore"; // From .env file in root directory


export const BASE_URL = `${API_URL}/`;

export const CART_URL = `${API_URL}/cart/`;
export const COMMODITIES_URL = `${API_URL}/commodity/`;


export const SIGN_IN_URL = `${API_URL}/signIn/`;
export const SIGN_UP_URL = `${API_URL}/signUp/`;
export const USER_URL = `${API_URL}/account/`;
export const ORDER_URL = `${API_URL}/order/`;

export const PET_URL = `${API_URL}/pets/`;
export const VET_URL = `${API_URL}/vets/`;
export const APPOINTMENT_URL = `${API_URL}/appointments/`;
export const CONDITION_URL = `${API_URL}/condition/`;
export const HISTORY_URL = `${API_URL}/history/`;
export const ADMIN_URL = `${API_URL}/admins/`;
export const FORMS_URL = `${API_URL}/forms/`;
export const PROCEDURES_URL = `${API_URL}/procedures/`;
