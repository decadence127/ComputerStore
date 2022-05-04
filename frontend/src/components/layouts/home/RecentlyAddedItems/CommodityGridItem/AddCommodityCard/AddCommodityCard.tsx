import { useSelector } from "react-redux";

import { Box, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import AddCommodityModal from "./AddCommodityModal/AddCommodityModal";

export default function AddCommodityCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      onClick={handleOpen}
      sx={{
        width: "240px",
        height: "300px",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 3,
        }}
      >
        <Typography>Add new product</Typography>
      </Box>
      <CardActions>
        <Box
          display="flex"
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
          }}
        >
          <AddCircleOutlineIcon sx={{ fontSize: 100 }} />
        </Box>
      </CardActions>
      <AddCommodityModal
        isOpen={open}
        clickHandler={handleClose}
        setIsOpen={setOpen}
      />
    </Card>
  );
}
