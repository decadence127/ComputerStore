import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Context } from ".";
import { adminPagesArray, userPagesArray } from "./utils/constats/pageArray";
import { HOME_ROUTE, SIGN_IN_ROUTE } from "./utils/routeNames";


const AppRouter = observer(() => {

  const { user } = useContext(Context);

  return (
    <Routes>
      {userPagesArray.map((page) => (<Route key={page.path} exact path={page.path} component={page.component} />))}
      {user.userData.role !== '' && user.userData.role === "ADMIN" && adminPagesArray.map(({ component, path }) => (<Route key={path} exact path={path} component={component} />))}
      <Route path={HOME_ROUTE} element={user.isAuth === true ? <Navigate to={HOME_ROUTE}/> : SIGN_IN_ROUTE}/>
    </Routes>)
})
export default AppRouter;
