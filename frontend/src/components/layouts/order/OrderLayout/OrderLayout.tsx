import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetOrderQuery } from "../../../../redux/services/orderService";
import { RootState } from "../../../../redux/store";

export default function OrderLayout() {
  const { id } = useSelector((store: RootState) => store.userReducer);

  const { data } = useGetOrderQuery({ id: String(id) });

  console.log(data);

  return <Box>{JSON.stringify(data)}</Box>;
}
