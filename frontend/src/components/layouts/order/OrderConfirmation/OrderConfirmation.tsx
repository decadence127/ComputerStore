import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export default function OrderConfirmation() {
  const order = useSelector((store: RootState) => store.orderReducer);
  console.log(order);

  return <Box>{JSON.stringify(order)}</Box>;
}
