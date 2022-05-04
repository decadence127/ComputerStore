import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ItemDescriptionProps {
  reactContent: ReactNode;
  activateEditDescriptionMode: () => void;
}

function ItemDescription({
  reactContent,
  activateEditDescriptionMode,
}: ItemDescriptionProps) {
  return (
    <Box
      onClick={activateEditDescriptionMode}
      data-testid="task_description-box"
    >
      {reactContent}
    </Box>
  );
}
export default ItemDescription;
