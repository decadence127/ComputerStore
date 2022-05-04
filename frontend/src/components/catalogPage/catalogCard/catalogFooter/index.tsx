/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import { Box, Button } from "@mui/material";

import styles from "./styles";

interface TaskNamePropsType {
  isTruncated: boolean;
  setIsTruncated: (value: boolean) => void;
}

function ItemFooter({
  isTruncated,
  setIsTruncated,
}: TaskNamePropsType): ReactElement {
  return (
    <Box css={styles.taskFooterStyles}>
      <Box css={styles.descriptionButtonWrapperStyles}>
        {isTruncated ? (
          <Button
            css={styles.descriptionButtonStyles}
            type="button"
            variant="text"
            onClick={() => setIsTruncated(false)}
          >
            See details
          </Button>
        ) : (
          <Button
            css={styles.descriptionButtonStyles}
            type="button"
            variant="text"
            onClick={() => setIsTruncated(true)}
          >
            Close
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ItemFooter;
