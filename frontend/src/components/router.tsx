import { Navigate, Route, Routes } from "react-router-dom";
import {
  CATALOG_ROUTE,
  HOME_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from "../utils/constants/routeNames";
import CatalogLayout from "./catalogPage";
import HomeLayout from "./layouts/home/HomeLayout";
import SignInLayout from "./layouts/signin/SignInLayout";
import SignUpLayout from "./layouts/signup/SignUpLayout";

function Router() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<HomeLayout />} />
      <Route path={SIGN_IN_ROUTE} element={<SignInLayout />} />
      <Route path={SIGN_UP_ROUTE} element={<SignUpLayout />} />
      <Route path={CATALOG_ROUTE} element={<CatalogLayout />} />

      <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
    </Routes>
  );
}
export default Router;
