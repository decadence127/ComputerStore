/** @jsxImportSource @emotion/react */
import {
  Drawer,
  LinearProgress,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CommodityData,
  useGetCommoditiesQuery,
  useGetCommodityQuery,
} from "../../../redux/services/commodityService";
import DeviceContainer from "./DeviceContainer/DeviceContainer";
import styles from "./styles";

export default function DeviceLayout() {
  const navigate = useNavigate();
  const { data: allCommodities } = useGetCommoditiesQuery();
  const { id } = useParams();
  const { data, isLoading } = useGetCommodityQuery({ id: Number(id) });
  const [similarItems, setSimilarItems] = React.useState<CommodityData[]>([]);

  const returnHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(-1);
  };
  const cardClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { path } = e.currentTarget.dataset;

    navigate("/catalog/device/" + path);
  };

  useEffect(() => {
    if (data && allCommodities) {
      const similarItems = allCommodities.filter((item) => {
        const dataNameWords = data.name.split(" ");
        const itemNameWords = item.name.split(" ");
        let similar = false;
        dataNameWords.forEach((word) => {
          if (itemNameWords.includes(word)) {
            similar = true;
          }
        });
        return similar;
      });
      setSimilarItems(similarItems.filter((item) => item.name !== data.name));
    }
  }, [data, allCommodities]);

  return (
    <>
      {isLoading && <LinearProgress />}
      {data && <DeviceContainer item={data} />}
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
        }}
      >
        <Box role="presentation" css={styles.drawerInnerBox}>
          <Link onClick={returnHandler}>Back</Link>
          <Typography
            margin="1rem"
            color="primary"
            fontWeight={500}
            variant="h4"
          >
            Similar Items
          </Typography>
          {similarItems.map((item) => (
            <Card
              key={item.id}
              data-path={item.id}
              onClick={cardClickHandler}
              elevation={4}
              sx={{ margin: "1rem", "&:hover": { cursor: "pointer" } }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  color="GrayText"
                  fontWeight="300"
                >
                  {item.price} BYN
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
