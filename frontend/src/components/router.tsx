import { Navigate, Route, Routes } from "react-router-dom";
import {
  ALL_ORDERS_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  DELIVERY_ROUTE,
  DEVICE_ROUTE,
  HOME_ROUTE,
  ORDERS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from "../utils/constants/routeNames";
import CatalogLayout from "./layouts/catalogPage";
import TakeoffsLayout from "./layouts/takeOff/TakeoffLayout";
import DeviceLayout from "./layouts/device/DeviceLayout";
import HomeLayout from "./layouts/home/HomeLayout";
import SignInLayout from "./layouts/signin/SignInLayout";
import SignUpLayout from "./layouts/signup/SignUpLayout";
import { PrivateRoute } from "./common/privateRoute/PrivateRoute";
import CartLayout from "./layouts/cart/CartLayout";
import OrderLayout from "./layouts/order/OrderLayout/OrderLayout";
import AllOrdersLayout from "./layouts/order/AllOrdersLayout/AllOrdersLayout";

function Router() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<HomeLayout />} />
      <Route path={SIGN_IN_ROUTE} element={<SignInLayout />} />
      <Route path={SIGN_UP_ROUTE} element={<SignUpLayout />} />
      <Route path={CATALOG_ROUTE} element={<CatalogLayout />} />
      <Route path={DEVICE_ROUTE} element={<DeviceLayout />} />
      <Route path={DELIVERY_ROUTE} element={<TakeoffsLayout />} />
      <Route path={CART_ROUTE} element={<PrivateRoute to={<CartLayout />} />} />
      <Route
        path={ORDERS_ROUTE}
        element={<PrivateRoute to={<OrderLayout />} />}
      />
      <Route
        path={ALL_ORDERS_ROUTE}
        element={<PrivateRoute requiredRole="ADMIN" to={<AllOrdersLayout />} />}
      />

      <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
    </Routes>
  );
}
export default Router;
