import { useSelector } from "react-redux";

import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CommodityState } from "../../../../../redux/slices/commoditySlice";
import { RootState } from "../../../../../redux/store";

interface CommodityCardProps {
  commodity?: CommodityState;
}

export default function CommodityCard({ commodity }: CommodityCardProps) {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.userReducer
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Cool item"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {commodity && commodity.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {commodity && commodity.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip
          title={isAuthenticated ? "" : "Sign up to add this item to the cart"}
        >
          <span>
            <Button disabled={!isAuthenticated} size="small">
              Add to cart
            </Button>
          </span>
        </Tooltip>
        <Button size="small">View details</Button>
      </CardActions>
    </Card>
  );
}
