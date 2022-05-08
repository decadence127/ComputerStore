import { Box } from "@mui/system";
import { useGetOrdersQuery } from "../../../../redux/services/orderService";

export default function AllOrdersLayout() {
  const { data } = useGetOrdersQuery();

  return <Box>{JSON.stringify(data)}</Box>;
}
