import HomeComponent from "../../components/HomeComponent";
import SignInComponent from "../../components/SignInComponent/SignInComponent";

import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";


import {
  ADD_COMMODITY_ROUTE,
  CART_ROUTE, COMMODITIES_ROUTE, EDIT_COMMODITY_ROUTE,

  HOME_ROUTE, ORDERS_ROUTE,

  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE, USER_COMMODITIES_ROUTE, USERS_ROUTE,
} from "../routeNames";
import ListAccountsComponent from "../../components/account/ListAccountsComponent";
import ViewCartComponent from "../../components/cart/ViewCartComponent";
import ListCommoditiesComponent from "../../components/commodity/ListCommoditiesComponent";
import AddCommodityComponent from "../../components/commodity/AddCommodityComponent";
import EditCommodityComponent from "../../components/commodity/EditCommodityComponent";
import ListOrdersComponent from "../../components/order/ListOrdersComponent";
import AddToCartComponent from "../../components/commodity/AddToCartComponent";

// Create array of objects where 'path' key is routeNames and 'component' key is component
// This is used to create the routes in the AppRouter.jsx file

export const userPagesArray = [
  {
    path: HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: SIGN_IN_ROUTE,
    component: SignInComponent,
  },

  {
    path: COMMODITIES_ROUTE,
    component: ListCommoditiesComponent,
  },
  {
    path: USER_COMMODITIES_ROUTE,
    component: AddToCartComponent,
  },
  {
    path: ADD_COMMODITY_ROUTE,
    component: AddCommodityComponent,
  },
  {
    path: EDIT_COMMODITY_ROUTE,
    component: EditCommodityComponent,
  },
  {
    path: ORDERS_ROUTE,
    component: ListOrdersComponent,
  },
  // {
  //   path: USER_HOME_ROUTE,
  //   component: UserHomeComponent,
  // },
  // {
  //   path: PETS_ROUTE,
  //   component: ListPetComponent,
  // },
  // {
  //   path: ADD_PET_ROUTE,
  //   component: AddPetComponent,
  // },
  // {
  //   path: EDIT_PET_ROUTE,
  //   component: EditPetComponent,
  // },
  // {
  //   path: ADD_VET_ROUTE,
  //   component: AddVetComponent,
  // },
  // {
  //   path: VETS_ROUTE,
  //   component: ListVetComponent,
  // },
  // {
  //   path: APPOINTMENT_ROUTE,
  //   component: ListAppointmentComponent,
  // },
  // {
  //   path: ADD_APPOINTMENT_ROUTE,
  //   component: AddAppointmentComponent,
  // },
  // {
  //   path: EDIT_APPOINTMENT_ROUTE,
  //   component: EditAppointmentComponent,
  // },
  // {
  //   path: HISTORY_ROUTE,
  //   component: ViewHistoryComponent,
  // },
  // {
  //   path: FORMS_ROUTE,
  //   component: ListFormComponent,
  // },
  // {
  //   path: FORM_ROUTE,
  //   component: ViewFormComponent,
  // },
  // {
  //   path: EDIT_FORM_ROUTE,
  //   component: EditFormComponent,
  // },
  // {
  //   path: PROCEDURE_ROUTE,
  //   component: ListProcedureComponent,
  // },
  // {
  //   path: ADD_PROCEDURE_ROUTE,
  //   component: AddProcedureComponent,
  // },
  // {
  //   path: EDIT_PROCEDURE_ROUTE,
  //   component: EditProcedureComponent,
  // },
  {
    path: CART_ROUTE,
    component: ViewCartComponent,
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignUpComponent,
  },
];
export const adminPagesArray = [
  // {
  //   path: ADMIN_HOME_ROUTE,
  //   component: AdminHomeComponent,
  // },
  // {
  //   path: STATS_ROUTE,
  //   component: ChartComponent,
  // },
  {
    path: USERS_ROUTE,
    component: ListAccountsComponent,
  },
];
