/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRemark } from "react-remark";
import { Box, IconButton } from "@mui/material";
import ItemDescription from "./catalogDescription";
import ItemDescriptionEditor from "./catalogDescriptionEditor";

import styles from "./styles";
import { RootState } from "../../../../../redux/store";
import { CommodityData } from "../../../../../redux/services/commodityService";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
interface ItemDescriptionProps {
  description: string;
  itemData: CommodityData;
  isTruncated: boolean;
  setIsTruncated: (prop: boolean) => void;
}

function ItemBody({
  description,
  itemData,
  isTruncated,
  setIsTruncated,
}: ItemDescriptionProps): ReactElement {
  const [editDescriptionMode, setEditDescriptionMode] = useState(false);
  const { role } = useSelector((state: RootState) => state.userReducer);

  const deactivateEditDescriptionMode = () => {
    setEditDescriptionMode(!editDescriptionMode);
    setIsTruncated(true);
  };

  const navigate = useNavigate();

  const activateEditDescriptionMode = () => {
    setEditDescriptionMode(!editDescriptionMode);
    setIsTruncated(false);
  };

  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(description);
  }, [description]);

  const handleOpenDevicePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/catalog/device/" + itemData.id);
  };

  const descriptionStyles = isTruncated
    ? styles.descriptionTextAreaStyles
    : styles.fullDescriptionTextAreaStyles;

  return (
    <Box display="flex">
      <Box css={styles.descriptionWrapperStyles}>
        <Box css={descriptionStyles} onClick={activateEditDescriptionMode}>
          {role === "ADMIN" && editDescriptionMode ? (
            <ItemDescriptionEditor
              deactivateEditDescriptionMode={deactivateEditDescriptionMode}
              itemData={itemData}
            />
          ) : (
            <ItemDescription
              reactContent={reactContent}
              activateEditDescriptionMode={activateEditDescriptionMode}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IconButton onClick={handleOpenDevicePage}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ItemBody;
