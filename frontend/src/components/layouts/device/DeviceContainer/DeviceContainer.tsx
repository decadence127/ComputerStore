/** @jsxImportSource @emotion/react */
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { CommodityData } from "../../../../redux/services/commodityService";
import styles from "../styles";

import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_ROUTE } from "../../../../utils/constants/routeNames";
import { snackActions } from "../../../../utils/helpers/snackBarUtils";
import {
  useEditCartMutation,
  useGetUserCartQuery,
} from "../../../../redux/services/cartService";

export default function DeviceContainer({ item }: { item: CommodityData }) {
  const { isAuthenticated, id } = useSelector(
    (state: RootState) => state.userReducer
  );
  const { data } = useGetUserCartQuery({ userId: String(id) });

  const [addToCart, { isLoading }] = useEditCartMutation();
  const navigate = useNavigate();

  const cartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate(SIGN_IN_ROUTE);
      snackActions.info("Please sign in to add to cart");
    }
    if (data) {
      addToCart({ ...data, commodities: [...data?.commodities, item] });
      snackActions.success("Item was added to the cart");
    }
  };
  return (
    <Container css={styles.containerStyles}>
      <Paper elevation={3} css={styles.paperWrapper}>
        <Box css={styles.boxWrapper}>
          <Box css={styles.imgWrapper}>
            <NoPhotographyIcon sx={{ fontSize: 180 }} />
            <Box sx={{ minWidth: "30%" }}>
              <Typography variant="h3">{item.name}</Typography>
            </Box>
          </Box>
          <Box sx={{ minHeight: "35%", marginTop: "2rem" }}>
            <Typography color="darkslategray" variant="h5" fontStyle="italic">
              {item.description}
            </Typography>
          </Box>
          <Box css={styles.footerBox}>
            <Typography variant="h4" fontWeight={500}>
              {item.price} <Typography component="span">BYN</Typography>
            </Typography>
            <Button variant="contained" onClick={cartHandler}>
              Add to cart
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
