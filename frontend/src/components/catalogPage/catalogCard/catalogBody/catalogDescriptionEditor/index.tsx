import { Box, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import {
  CommodityData,
  useChangeCommodityMutation,
} from "../../../../../redux/services/commodityService";

interface TaskDescriptionEditorProps {
  itemData: CommodityData;
  deactivateEditDescriptionMode: () => void;
}

function TaskDescriptionEditor({
  itemData,
  deactivateEditDescriptionMode,
}: TaskDescriptionEditorProps) {
  const [changeCommodity] = useChangeCommodityMutation();
  const [desc, setDesc] = useState(itemData.description);

  const editTaskDescriptionHandler = async (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (desc !== itemData.description) {
      // Prevent unnecessary mutation if task desc is not changed (i.e. if user closes edit mode without changing anything)
      const result = await changeCommodity({
        ...itemData,
        description: desc,
      }).unwrap();
      console.log(result);
    }
    deactivateEditDescriptionMode();
  };

  return (
    <form>
      <Box>
        <FormControl fullWidth>
          <TextField
            name="description"
            label="Description"
            autoFocus
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            onBlur={editTaskDescriptionHandler}
          />
        </FormControl>
      </Box>
    </form>
  );
}

export default TaskDescriptionEditor;
