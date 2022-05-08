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

interface Column {
  id:
    | "account"
    | "commodities"
    | "address"
    | "condition"
    | "delivery"
    | "deliveryDate"
    | "id"
    | "orderDate"
    | "payment";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "#", minWidth: 70 },
  { id: "account", label: "Customer name", minWidth: 170 },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
  },
  {
    id: "condition",
    label: "Condition",
    minWidth: 170,
  },
  {
    id: "delivery",
    label: "Delivery type",
    minWidth: 170,
  },
  {
    id: "payment",
    label: "Payment",
    minWidth: 70,
  },
  {
    id: "orderDate",
    label: "Order date",
    minWidth: 170,
  },
  {
    id: "deliveryDate",
    label: "Delivery date",
    minWidth: 170,
  },
];

export default function OrderLayout() {
  const { id } = useSelector((store: RootState) => store.userReducer);
  const { data } = useGetUsersOrdersQuery({ id: String(id) });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const tabelizeData = useCallback(
    (order: OrderData) => {
      return {
        id: order.id,
        account: `${order.account.accountData.firstname} ${order.account.accountData.lastname}`,
        address: `${order.address.city}, ${order.address.street}, ${order.address.houseNumber}`,
        condition: order.condition,
        delivery: order.delivery,
        payment: order.payment,
        orderDate: order.orderDate,
        deliveryDate: order.deliveryDate,
      } as unknown as OrderData;
    },
    [data]
  );

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "3rem", minHeight: "100vh" }}>
      <Typography variant="h4" color="primary">
        Orders
      </Typography>{" "}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = tabelizeData(row)[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : (value as any)}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data ? data.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
