/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";

import styles from "../styles";

interface TaskNameProps {
  price: number;
  activateEditPriceMode: () => void;
}

function ItemPrice({ price, activateEditPriceMode }: TaskNameProps) {
  return (
    <Box css={styles.titleStyles} onClick={activateEditPriceMode}>
      <Typography>{price} BYN</Typography>
    </Box>
  );
}

export default ItemPrice;
