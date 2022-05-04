/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from "react";

import { LoadingButton } from "@mui/lab/";
import { Box, Button, FormControl, TextField } from "@mui/material";

import {
  CommodityData,
  useAddCommodityMutation,
} from "../../../redux/services/commodityService";
import styles from "./styles";

interface ItemPropsType {
  setItemFormMode: (prop: boolean) => void;
}

interface AddItemFormType {
  name: string;
  description: string;
}

function AddItemForm({ setItemFormMode }: ItemPropsType): ReactElement {
  const [addCommodity, { isLoading }] = useAddCommodityMutation();
  const [itemData, setItemData] = useState<Omit<CommodityData, "id">>({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setItemData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await addCommodity({
      ...itemData,
    });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box css={styles.taskWrapperStyles}>
        <Box css={styles.inputWrapperStyles}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            css={styles.inputStyles}
            onChange={changeHandler}
          />
        </Box>
        <Box css={styles.inputWrapperStyles}>
          <TextField
            variant="outlined"
            css={styles.inputStyles}
            name="description"
            label="Description"
            onChange={changeHandler}
          />
        </Box>
        <Box
          display="flex"
          sx={{ maxWidth: "93.3%", justifyContent: "space-between" }}
        >
          <FormControl fullWidth sx={{ marginRight: "80px" }}>
            <TextField
              type="number"
              name="quantity"
              label="Quantity"
              variant="outlined"
              css={styles.inputStyles}
              onChange={changeHandler}
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginLeft: "80px" }}>
            <TextField
              type="number"
              name="price"
              label="Price(BYN)"
              variant="outlined"
              css={styles.inputStyles}
              onChange={changeHandler}
            />
          </FormControl>
        </Box>

        <Box css={styles.buttonsWrapperStyles}>
          <Box css={styles.addButtonWrapperStyles}>
            <LoadingButton
              data-testid="add_task-button"
              loading={isLoading}
              type="submit"
              variant="contained"
            >
              Add item
            </LoadingButton>
          </Box>
          <Box>
            <Button
              css={styles.closeButtonStyles}
              type="button"
              variant="contained"
              onClick={() => setItemFormMode(false)}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default AddItemForm;
