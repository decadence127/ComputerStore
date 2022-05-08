import { Box, Modal, Typography } from "@mui/material";
import { CommodityData } from "../../../../redux/services/commodityService";
import { useAddOrderMutation } from "../../../../redux/services/orderService";
import OrderStepper from "./orderStepper/OrderStepper";

interface OrderModalProps {
  open: boolean;
  handleClose: () => void;
  commodities: CommodityData[];
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  minHeight: "26rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export default function OrderModal({
  open,
  handleClose,
  commodities,
}: OrderModalProps) {
  const [makeOrder, { isLoading }] = useAddOrderMutation();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <OrderStepper />
      </Box>
    </Modal>
  );
}
