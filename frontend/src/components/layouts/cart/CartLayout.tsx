import { Container, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetUserCartQuery } from "../../../redux/services/cartService";
import { RootState } from "../../../redux/store";
import UserCart from "./userCart/UserCart";

export default function CartLayout() {
  const { id } = useSelector((store: RootState) => store.userReducer);

  const { data, isLoading } = useGetUserCartQuery({ userId: String(id) });

  return isLoading ? (
    <LinearProgress />
  ) : (
    <Container sx={{ minHeight: "100vh" }}>
      {data && data.commodities ? (
        <UserCart cart={data} />
      ) : (
        <Typography>No items found</Typography>
      )}
    </Container>
  );
}
