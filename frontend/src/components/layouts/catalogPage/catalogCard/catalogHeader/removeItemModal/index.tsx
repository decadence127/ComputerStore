/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import { Box, Modal, Fade, Backdrop, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab/";

import styles from "./styles";
import { useDeleteCommodityMutation } from "../../../../../../redux/services/commodityService";

interface SuccessModalProps {
  id: number | string;
  name: string;
  setActiveModal: (value: boolean) => void;
  open: boolean;
  onClose: () => void;
}

function RemoveTaskModal({
  id,
  name,
  setActiveModal,
  open,
  onClose,
}: SuccessModalProps): ReactElement {
  const [deleteCommodity, { isLoading }] = useDeleteCommodityMutation();

  const closeModalHandler = () => {
    setActiveModal(false);
  };

  const removeItemHandler = async () => {
    const result = await deleteCommodity({ id }).unwrap();
    if (result) {
      setActiveModal(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      disableAutoFocus
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box css={styles.modalStyles} boxShadow={24}>
          <Box css={styles.messageWrapperStyle}>
            <p>Are you sure you want to delete {name}?</p>
          </Box>
          <Box css={styles.buttonsWrapperStyle}>
            <LoadingButton
              onClick={removeItemHandler}
              loading={isLoading}
              css={styles.buttonStyle}
              type="submit"
              variant="contained"
            >
              Yes
            </LoadingButton>
            <Button
              css={styles.closeButtonStyle}
              onClick={closeModalHandler}
              type="button"
              color="secondary"
              variant="contained"
            >
              Close
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default RemoveTaskModal;
