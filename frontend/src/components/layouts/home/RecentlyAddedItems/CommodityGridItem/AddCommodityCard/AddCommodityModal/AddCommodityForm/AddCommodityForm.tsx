/** @jsxImportSource @emotion/react */
import { Button, FormControl, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useAddCommodityMutation } from "../../../../../../../../redux/services/commodityService";
import { CommodityState } from "../../../../../../../../redux/slices/commoditySlice";
import { snackActions } from "../../../../../../../../utils/helpers/snackBarUtils";
import styles from "./styles";

export default function AddCommodityForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [addCommodity, { isLoading }] = useAddCommodityMutation();

  const [commodityData, setCommodityData] = useState<
    Omit<CommodityState, "id">
  >({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCommodityData({ ...commodityData, [name]: value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await addCommodity(commodityData);
    console.log(result);
    if ("data" in result) {
      snackActions.success("Commodity added successfully");
      closeModal();
    }
  };

  return (
    <form onSubmit={submitHandler} css={styles.formStyles}>
      <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
        <TextField
          onChange={changeHandler}
          required
          variant="outlined"
          name="name"
          label="Title"
          id="title"
        />
      </FormControl>
      <FormControl sx={{ minWidth: "95%", margin: "0 20px" }}>
        <TextField
          onChange={changeHandler}
          required
          variant="outlined"
          name="description"
          label="Description"
          id="description"
        />
      </FormControl>

      <Box display="flex" sx={{ minWidth: "95%" }}>
        <FormControl sx={{ marginRight: "10px" }}>
          <TextField
            onChange={changeHandler}
            type="number"
            required
            variant="outlined"
            name="quantity"
            label="Quantity"
            id="quantity"
          />
        </FormControl>
        <FormControl>
          <TextField
            onChange={changeHandler}
            type="number"
            required
            variant="outlined"
            name="price"
            label="Price(BYN)"
            id="price"
          />
        </FormControl>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          "& button": {
            width: "120px",
          },
        }}
      >
        <Button
          disabled={isLoading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </Box>
    </form>
  );
}
