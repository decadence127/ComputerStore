/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from "react";
import { Box } from "@mui/material";
import ItemBody from "./catalogBody";

import styles from "./styles";
import ItemFooter from "./catalogFooter";
import ItemHeader from "./catalogHeader";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import { CommodityData } from "../../../redux/services/commodityService";

interface TaskPropsType {
  itemData: CommodityData;
}
const defaultTruncatedLength = 150;

function Item({ itemData }: TaskPropsType): ReactElement {
  const { description } = itemData;
  const [isTruncated, setIsTruncated] = useState(false);

  const resultDescription = isTruncated
    ? description.slice(0, defaultTruncatedLength)
    : description;

  return (
    <Box css={styles.taskWrapperStyles}>
      <Box css={styles.imgBox}>
        <NoPhotographyIcon sx={{ fontSize: 72 }} />
      </Box>
      <Box css={styles.innerBox}>
        <ItemHeader itemData={itemData} />
        <ItemBody
          description={resultDescription}
          itemData={itemData}
          isTruncated={isTruncated}
          setIsTruncated={setIsTruncated}
        />
        <ItemFooter isTruncated={isTruncated} setIsTruncated={setIsTruncated} />
      </Box>
    </Box>
  );
}

export default Item;
