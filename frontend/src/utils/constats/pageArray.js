import HomeComponent from "../../components/account/HomeComponent"
import ListAccountsComponent from "../../components/account/ListAccountsComponent"
import ViewCartComponent from "../../components/cart/ViewCartComponent"
import ListOrdersComponent from "../../components/order/ListOrdersComponent"
import ListCommoditiesComponent from "../../components/commodity/ListCommoditiesComponent"

// import StatisticComponent from "../../components/admin/StatisticComponent";

import {
    CART_ROUTE, COMMODITIES_ROUTE, HOME_ROUTE, ORDERS_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE, STATS_ROUTE,

    USERS_ROUTE,
} from "../routeNames";
import SignInComponent from "../../components/SignInComponent/SignInComponent";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";

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
        path: SIGN_UP_ROUTE,
        component: SignUpComponent,
    },
    {
        path: CART_ROUTE,
        component: ViewCartComponent,
    },
    {
        path: ORDERS_ROUTE,
        component: ListOrdersComponent,
    },
];
export const adminPagesArray = [
    {
        path: STATS_ROUTE,
        // component: StatisticComponent,  This component doesn't exist yet I guess..
    },
    {
        path: USERS_ROUTE,
        component: ListAccountsComponent,
    },
];
