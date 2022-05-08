import { Container, Typography } from "@mui/material";
import { useGetOrdersQuery } from "../../../../redux/services/orderService";
import OrderTable from "../orderTable/OrderTable";

export default function AllOrdersLayout() {
  const { data } = useGetOrdersQuery();

  return (
    <Container maxWidth="xl" sx={{ marginTop: "3rem", minHeight: "100vh" }}>
      <Typography variant="h4" color="primary">
        All orders
      </Typography>{" "}
      {data && <OrderTable orderData={data} />}
    </Container>
  );
}
