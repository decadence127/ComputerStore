import React, { useEffect } from "react";
import { useRefreshMutation } from "../redux/services/authService";
import { LinearProgress } from "@mui/material";
import Layout from "./layouts/layout/Layout";
import Router from "./router";

function App() {
  const [refresh, { isLoading }] = useRefreshMutation();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) return;
    (async () => {
      await refresh();
    })();
  }, []);

  return isLoading ? (
    <LinearProgress />
  ) : (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
