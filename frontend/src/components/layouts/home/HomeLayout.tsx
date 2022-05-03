/** @jsxImportSource @emotion/react */
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetCommoditiesQuery } from "../../../redux/services/commodityService";
import { RootState } from "../../../redux/store";
import ImportantLinksList from "./ImportantLinksList/ImportanitLinksList";
import CommodityCard from "./RecentlyAddedItems/CommodityGridItem/CommodityGridItem";
import RecentlyAddedItems from "./RecentlyAddedItems/RecentlyAddedItems";
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
        maxWidth="xl"
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 12,
        }}
      >
        {!isLoading && <RecentlyAddedItems data={data} />}
        <ImportantLinksList />
      </Container>
    </Box>
  );
};
export default HomeLayout;
