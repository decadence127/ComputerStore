/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

import styles from "../styles";
import {
  CommodityData,
  useChangeCommodityMutation,
} from "../../../../../../redux/services/commodityService";

interface ItemNameEditorProps {
  itemData: CommodityData;
  setEditNameMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemNameEditor({ itemData, setEditNameMode }: ItemNameEditorProps) {
  const [name, setName] = useState(itemData.name);
  const [editCommodity] = useChangeCommodityMutation();

  const editItemNameHandler = async (
    event: React.FocusEvent<HTMLInputElement>
  ): Promise<void> => {
    event?.preventDefault();
    if (name !== itemData.name) {
      // Prevent unnecessary mutation if name is not changed (i.e. if user closes edit mode without changing anything)
      const result = await editCommodity({ ...itemData, name }).unwrap();
      console.log(result);
    }
    setEditNameMode(false);
  };

  return (
    <Box css={styles.inputTitleWrapperStyles}>
      <form>
        <TextField
          name="name"
          autoFocus
          placeholder="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          onBlur={editItemNameHandler}
          css={styles.inputTitleStyles}
        />
      </form>
    </Box>
  );
}
export default ItemNameEditor;
