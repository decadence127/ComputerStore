import { Card, Grid } from "@mui/material";
import { CommodityState } from "../../../../redux/slices/commoditySlice";
import CommodityCard from "./CommodityCard/CommodityCard";

interface CommodityGridItemProps {
  commodity?: CommodityState;
  add?: boolean;
}
const CommodityGridItem = ({ commodity, add }: CommodityGridItemProps) => {
  return <Grid item>{!add && <CommodityCard />}</Grid>;
};
export default CommodityGridItem;
