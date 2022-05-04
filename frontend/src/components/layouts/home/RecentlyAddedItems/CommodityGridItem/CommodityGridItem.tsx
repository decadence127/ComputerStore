import { Card, Grid } from "@mui/material";
import { CommodityState } from "../../../../../redux/slices/commoditySlice";
import AddCommodityCard from "./AddCommodityCard/AddCommodityCard";
import CommodityCard from "./CommodityCard/CommodityCard";

interface CommodityGridItemProps {
  commodity?: CommodityState;
  add?: boolean;
}
const CommodityGridItem = ({ commodity, add }: CommodityGridItemProps) => {
  return (
    <Grid item>
      {add ? <AddCommodityCard /> : <CommodityCard commodity={commodity} />}
    </Grid>
  );
};
export default CommodityGridItem;
