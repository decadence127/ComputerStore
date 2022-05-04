/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import { CommodityData } from "../../../../redux/services/commodityService";
import CommodityGridItem from "./CommodityGridItem/CommodityGridItem";

interface RecentlyAddedItemsProps {
  data?: CommodityData[];
}

export default function RecentlyAddedItems({ data }: RecentlyAddedItemsProps) {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        component="h1"
        gutterBottom
        color="primary"
        sx={{ paddingBottom: 3 }}
      >
        5 Recently added products
      </Typography>
      <Grid
        sx={{ flexGrow: 1, justifyContent: "center" }}
        container
        spacing={2}
      >
        {data &&
          data.slice(Math.max(data.length - 5, 0)).map((commodity) => {
            return (
              <CommodityGridItem key={commodity.id} commodity={commodity} />
            );
          })}
      </Grid>
    </>
  );
}
