import { Box, Modal, Typography } from "@mui/material";
import AddCommodityForm from "./AddCommodityForm/AddCommodityForm";

interface AddCommodityModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clickHandler: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddCommodityModal({
  isOpen,
  setIsOpen,
  clickHandler,
}: AddCommodityModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={clickHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new device
        </Typography>
        <Box sx={{ padding: 3 }}>
          <AddCommodityForm closeModal={clickHandler} />
        </Box>
      </Box>
    </Modal>
  );
}
