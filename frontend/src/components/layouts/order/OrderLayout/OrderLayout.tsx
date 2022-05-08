import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetUsersOrdersQuery } from "../../../../redux/services/orderService";
import { RootState } from "../../../../redux/store";

export default function OrderLayout() {
  const { id } = useSelector((store: RootState) => store.userReducer);
  const { data } = useGetUsersOrdersQuery({ id: String(id) });

  console.log(data);

  return <Box>{JSON.stringify(data)}</Box>;
}
