/** @jsxImportSource @emotion/react */
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useGetCommoditiesQuery } from "../../../redux/services/commodityService";
import CommodityCard from "./CommodityGridItem/CommodityGridItem";
import styles from "./styles";

interface HomeLayoutProps {}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  const { data, isLoading } = useGetCommoditiesQuery();
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          {data &&
            data.map((value) => {
              return <CommodityCard />;
            })}
        </Grid>
      </Container>
    </Box>
  );
};
export default HomeLayout;
