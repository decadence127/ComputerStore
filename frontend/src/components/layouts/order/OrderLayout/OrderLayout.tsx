import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import {
  OrderData,
  useGetUsersOrdersQuery,
} from "../../../../redux/services/orderService";
import { RootState } from "../../../../redux/store";
import OrderTable from "../orderTable/OrderTable";

export default function OrderLayout() {
  const { id } = useSelector((store: RootState) => store.userReducer);
  const { data } = useGetUsersOrdersQuery({ id: String(id) });

  return (
    <Container maxWidth="xl" sx={{ marginTop: "3rem", minHeight: "100vh" }}>
      <Typography variant="h4" color="primary">
        Orders
      </Typography>{" "}
      {data && <OrderTable orderData={data} />}
    </Container>
  );
}
