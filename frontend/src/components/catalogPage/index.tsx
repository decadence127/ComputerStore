/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import Item from "./catalogCard";
import AddTaskForm from "./addItemModal";

import styles from "./styles";
import { RootState } from "../../redux/store";
import { useGetCommoditiesQuery } from "../../redux/services/commodityService";

function CatalogLayout(): ReactElement {
  const [taskFormMode, setItemFromMode] = useState(false);

  const { role } = useSelector((store: RootState) => store.userReducer);

  const { data, isLoading } = useGetCommoditiesQuery();

  return (
    <Container maxWidth="lg" css={styles.containerStyles}>
      <Box css={styles.tasksHeaderStyles}>
        <Box>
          <Typography variant="h2" fontSize="2rem" color="primary">
            Catalog
          </Typography>
        </Box>
        {role === "ADMIN" && (
          <Box>
            <Button
              onClick={() => {
                setItemFromMode(true);
              }}
              css={styles.createTaskButtonStyles}
              type="button"
              variant="contained"
              color="primary"
              value="Create new task"
              disabled={taskFormMode}
            >
              Add new item
            </Button>
          </Box>
        )}
      </Box>
      <Box css={styles.tasksWrapperStyles}>
        {taskFormMode && <AddTaskForm setItemFormMode={setItemFromMode} />}
        {!isLoading &&
          data &&
          data.length > 0 &&
          [...data].reverse().map((t) => {
            return <Item key={t.id} itemData={t} />;
          })}
        {isLoading === true && (
          <Box>
            <CircularProgress data-testid="tasks-preloader" />
          </Box>
        )}
        {data?.length === 0 && !isLoading && <h2>No Items</h2>}
      </Box>
    </Container>
  );
}

export default CatalogLayout;
