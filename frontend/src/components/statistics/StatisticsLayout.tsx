import { Container, Typography, Box } from "@mui/material";
import { useGetOrdersQuery } from "../../redux/services/orderService";
import OrderDayStats from "./OrderDayStats/OrderDayStats";

export function StatisticsLayout() {
  const { data: ordersData } = useGetOrdersQuery();

  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh", paddingTop: "3rem" }}>
      <Typography color="primary" variant="h3">
        Statistics
      </Typography>
      <Box>{ordersData && <OrderDayStats orders={ordersData} />}</Box>
    </Container>
  );
}
