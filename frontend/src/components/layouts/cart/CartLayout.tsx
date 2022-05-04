import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetUserCartQuery } from "../../../redux/services/cartService";
import { RootState } from "../../../redux/store";

export default function CartLayout() {
  const { id } = useSelector((store: RootState) => store.userReducer);

  const { data, isLoading } = useGetUserCartQuery({ userId: String(id) });
  console.log(data?.commodities);

  return isLoading ? <LinearProgress /> : <div>{JSON.stringify(data)}</div>;
}
