/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";

import styles from "../styles";

interface TaskNameProps {
  name: string;
  activateEditNameMode: () => void;
}

function ItemName({ name, activateEditNameMode }: TaskNameProps) {
  return (
    <Box
      css={styles.titleStyles}
      onClick={activateEditNameMode}
      data-testid="task_name-box"
    >
      <h3>{name}</h3>
    </Box>
  );
}

export default ItemName;
