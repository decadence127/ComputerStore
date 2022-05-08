import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export default function OrderConfirmation() {
  const { account, address, commodities, orderDate, payment } = useSelector(
    (store: RootState) => store.orderReducer
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 12,
        "&>*": { margin: "8px 0" },
      }}
    >
      <Typography>
        Customer name: {account.accountData.firstname}{" "}
        {account.accountData.lastname}
      </Typography>
      <Typography>
        Address: {address.city}, {address.street}, {address.houseNumber}
      </Typography>
      <Typography>
        Ordered items:{" "}
        {commodities.map(
          (item, index, arr) =>
            `${item.name} ${index !== arr.length - 1 ? ", " : ""}`
        )}
      </Typography>
      <Typography>Order date: {orderDate.toLocaleString()}</Typography>
      <Typography>Payment type: {payment}</Typography>
      <Typography>
        Total price: {commodities.reduce((acc, item) => (acc += item.price), 0)}{" "}
        BYN
      </Typography>
    </Box>
  );
}
