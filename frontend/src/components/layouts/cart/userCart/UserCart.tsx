import { Paper, Box, Typography, Link, Button, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommodityData } from "../../../../redux/services/commodityService";
import { useAddOrderMutation } from "../../../../redux/services/orderService";
import OrderModal from "../../order/orderModal/OrderModal";

interface UserCartProps {
  items: CommodityData[];
}

export default function UserCart({ items }: UserCartProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCommodities, setSelectedCommodities] = useState<
    CommodityData[]
  >([]);
  const navigate = useNavigate();

  const [openOrderModal, setOpenOrderModal] = useState(false);

  const handleClick = (
    event: React.MouseEvent<unknown>,
    item: CommodityData
  ) => {
    const selectedIndex = selectedCommodities.indexOf(item);
    let newSelected: CommodityData[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedCommodities, item);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedCommodities.slice(1));
    } else if (selectedIndex === selectedCommodities.length - 1) {
      newSelected = newSelected.concat(selectedCommodities.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedCommodities.slice(0, selectedIndex),
        selectedCommodities.slice(selectedIndex + 1)
      );
    }

    setSelectedCommodities(newSelected);
  };
  useEffect(() => {
    const tPrice = selectedCommodities.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);

    setTotalPrice(tPrice);
  }, [selectedCommodities]);

  const returnHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    navigate(-1);
  };
  const orderHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenOrderModal(true);
    console.log(selectedCommodities);
  };

  const isSelected = (item: CommodityData) =>
    selectedCommodities.indexOf(item) !== -1;

  return (
    <Paper sx={{ marginTop: "5rem", padding: "1rem" }}>
      <Typography color="primary" variant="h4">
        Cart
      </Typography>
      <hr />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minWidth: "80%",
          justifyContent: "space-around",
          padding: "0 42px",
        }}
      >
        <Box>#</Box>
        <Box>Name</Box>
        <Box>Price</Box>
      </Box>
      {items.map((item, id) => {
        const isItemSelected = isSelected(item);
        return (
          <React.Fragment key={item.id}>
            <Box
              sx={{ display: "flex", padding: "1.5rem" }}
              onClick={(event) => handleClick(event, item)}
            >
              <Checkbox
                value={id}
                checked={isItemSelected}
                inputProps={{
                  "aria-labelledby": item.name,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "90%",
                  justifyContent: "space-around",
                }}
              >
                <Box>{id + 1}</Box>
                <Box>{item.name}</Box>
                <Box>{item.price} BYN</Box>
              </Box>
            </Box>
          </React.Fragment>
        );
      })}
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Link onClick={returnHandler}>Back</Link>
        <Typography>Total price: {totalPrice} BYN</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={orderHandler}
          disabled={selectedCommodities.length === 0}
        >
          Order
        </Button>
      </Box>
      <OrderModal
        commodities={selectedCommodities}
        open={openOrderModal}
        handleClose={() => setOpenOrderModal(false)}
      />
    </Paper>
  );
}
