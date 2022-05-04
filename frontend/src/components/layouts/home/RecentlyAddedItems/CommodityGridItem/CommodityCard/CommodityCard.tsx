import { useSelector } from "react-redux";

import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CommodityState } from "../../../../../../redux/slices/commoditySlice";
import { RootState } from "../../../../../../redux/store";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../../../../../utils/constants/routeNames";

interface CommodityCardProps {
  commodity?: CommodityState;
}

export default function CommodityCard({ commodity }: CommodityCardProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.userReducer
  );

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate("/catalog/device/" + commodity?.id);
  };
  return (
    <Card elevation={3} sx={{ maxWidth: 240, maxHeight: 350 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Cool item"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            maxWidth: 210,
            maxHeight: 35,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {commodity && commodity.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            maxWidth: 210,
            maxHeight: 35,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {commodity && commodity.description}
        </Typography>
        <Typography variant="caption" color="CaptionText">
          {commodity && commodity.price + " BYN"}
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
        <Button size="small" onClick={clickHandler}>
          View details
        </Button>
      </CardActions>
    </Card>
  );
}
