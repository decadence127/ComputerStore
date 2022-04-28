import { Box, LinearProgress } from "@mui/material";
import { useGetCommoditiesQuery } from "../../../redux/services/commodityService";

interface HomeLayoutProps {}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  const { data, isLoading } = useGetCommoditiesQuery();
  return (
    <Box sx={{ minHeight: "100vh" }}>
      home
      {isLoading ? <LinearProgress /> : data && JSON.stringify(data)}
    </Box>
  );
};
export default HomeLayout;
