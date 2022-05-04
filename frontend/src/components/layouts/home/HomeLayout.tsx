/** @jsxImportSource @emotion/react */
import {
  AppBar,
  Box,
  Container,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetCommoditiesQuery } from "../../../redux/services/commodityService";
import { RootState } from "../../../redux/store";
import ImportantLinksList from "./ImportantLinksList/ImportanitLinksList";
import CommodityCard from "./RecentlyAddedItems/CommodityGridItem/CommodityGridItem";
import RecentlyAddedItems from "./RecentlyAddedItems/RecentlyAddedItems";
import QuizIcon from "@mui/icons-material/Quiz";
import TerminalIcon from "@mui/icons-material/Terminal";
import GamesIcon from "@mui/icons-material/Games";
import ViewListIcon from "@mui/icons-material/ViewList";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../../../utils/constants/routeNames";

interface HomeLayoutProps {}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  const navigate = useNavigate();
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
      <Box sx={{ width: "60vw", height: "80px" }}>
        <Toolbar
          sx={{
            borderRadius: "4px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            height: "100%",
            backgroundColor: "#f3f3f3",
          }}
        >
          <Box
            onClick={() => navigate(CATALOG_ROUTE)}
            sx={{
              display: "flex",
              height: 'calc(100 % -"80px")',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              "&:hover": {
                backgroundColor: "#dddada",
                cursor: "pointer",
              },
            }}
          >
            <ViewListIcon />
            <Typography>Main Catalog</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: 'calc(100 % -"80px")',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              "&:hover": {
                backgroundColor: "#dddada",
                cursor: "pointer",
              },
            }}
          >
            <GamesIcon />
            <Typography>Games & Entertainment</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: 'calc(100 % -"80px")',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              "&:hover": {
                backgroundColor: "#dddada",
                cursor: "pointer",
              },
            }}
          >
            <TerminalIcon />
            <Typography>Software</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: 'calc(100 % -"80px")',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              "&:hover": {
                backgroundColor: "#dddada",
                cursor: "pointer",
              },
            }}
          >
            <QuizIcon />
            <Typography>FAQ</Typography>
          </Box>
        </Toolbar>
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
