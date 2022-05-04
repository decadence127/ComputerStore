/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import RemoveTaskModal from "./removeItemModal";
import ItemName from "./itemName";

import styles from "./styles";
import ItemNameEditor from "./ItemNameEditor";
import { CommodityData } from "../../../../../redux/services/commodityService";
import { RootState } from "../../../../../redux/store";
import ItemPrice from "./itemPrice";
import ItemPriceEditor from "./ItemPriceEditor";
import { Outlet, useNavigate } from "react-router-dom";

interface ItemNamePropsType {
  itemData: CommodityData;
}

function ItemHeader({ itemData }: ItemNamePropsType): ReactElement {
  const [editNameMode, setEditNameMode] = useState(false);
  const [editPriceMode, setEditPriceMode] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const navigate = useNavigate();

  const { role } = useSelector((store: RootState) => store.userReducer);

  const activateEditNameMode = () => {
    setEditNameMode(true);
  };
  const activateEditPriceMode = () => {
    setEditPriceMode(true);
  };

  const handleClose = () => {
    setActiveModal(false);
  };
  const handleOpenDevicePage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate("/catalog/device/" + itemData.id);
  };

  return (
    <Box onClick={handleOpenDevicePage}>
      {role === "ADMIN" && editNameMode ? (
        <ItemNameEditor itemData={itemData} setEditNameMode={setEditNameMode} />
      ) : role === "ADMIN" && editPriceMode ? (
        <ItemPriceEditor
          itemData={itemData}
          setEditPriceMode={setEditPriceMode}
        />
      ) : (
        <Box css={styles.titleWrapperStyles}>
          <ItemName
            name={itemData.name}
            activateEditNameMode={activateEditNameMode}
          />
          <ItemPrice
            price={itemData.price}
            activateEditPriceMode={activateEditPriceMode}
          />
          <Box css={styles.creatorBoxStyles}>
            {role === "ADMIN" && (
              <Typography variant="caption">
                Quantity: {itemData.quantity}
              </Typography>
            )}
            {role === "ADMIN" && (
              <IconButton
                onClick={() => setActiveModal(true)}
                css={styles.removeButtonStyles}
                type="button"
                data-testid="delete_task-button"
              >
                <DeleteOutlineIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      )}
      {activeModal && (
        <RemoveTaskModal
          id={itemData.id}
          name={itemData.name}
          setActiveModal={setActiveModal}
          open={activeModal}
          onClose={handleClose}
        />
      )}
    </Box>
  );
}

export default ItemHeader;
