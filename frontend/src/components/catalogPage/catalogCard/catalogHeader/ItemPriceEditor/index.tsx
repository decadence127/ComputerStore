/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

import styles from "../styles";
import {
  CommodityData,
  useChangeCommodityMutation,
} from "../../../../../redux/services/commodityService";

interface ItemPriceEditorProps {
  itemData: CommodityData;
  setEditPriceMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemPriceEditor({ itemData, setEditPriceMode }: ItemPriceEditorProps) {
  const [price, setPrice] = useState<number>(itemData.price);
  const [editCommodity] = useChangeCommodityMutation();

  const editItemPriceHandler = async (
    event: React.FocusEvent<HTMLInputElement>
  ): Promise<void> => {
    event?.preventDefault();
    if (price !== itemData.price) {
      // Prevent unnecessary mutation if name is not changed (i.e. if user closes edit mode without changing anything)
      const result = await editCommodity({ ...itemData, price }).unwrap();
      console.log(result);
    }
    setEditPriceMode(false);
  };

  return (
    <Box css={styles.inputTitleWrapperStyles}>
      <form>
        <TextField
          name="price"
          autoFocus
          placeholder="Price"
          variant="outlined"
          type="number"
          onChange={(e) => setPrice(e.target.value as unknown as number)}
          onBlur={editItemPriceHandler}
          css={styles.inputTitleStyles}
        />
      </form>
    </Box>
  );
}
export default ItemPriceEditor;
