/** @jsxImportSource @emotion/react */
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetCommoditiesQuery } from "../../../redux/services/commodityService";
import { RootState } from "../../../redux/store";
import CommodityCard from "./CommodityGridItem/CommodityGridItem";
import styles from "./styles";

interface HomeLayoutProps {}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  const { data, isLoading } = useGetCommoditiesQuery();
  const { role } = useSelector((state: RootState) => state.userReducer);
  return (
    <Box css={styles.wrapperStyle}>
      {isLoading && <LinearProgress />}
      <Box css={styles.welcomeContainerStyle}>
        <Box css={styles.welcomeTextStyle} className="welcomeText">
          <Typography css={styles.welcomeTextTitleStyle} component="h1">
            Best laptops 2022
          </Typography>
        </Box>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          component="h1"
          gutterBottom
          color="primary"
          sx={{ paddingBottom: 3 }}
        >
          Recently added products
        </Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          {data &&
            data.map((commodity) => {
              return <CommodityCard key={commodity.id} commodity={commodity} />;
            })}
          {role === "ADMIN" && <CommodityCard add />}
        </Grid>
      </Container>
    </Box>
  );
};
export default HomeLayout;
