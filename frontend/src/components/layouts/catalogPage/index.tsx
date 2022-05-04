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
import AddItemFrom from "./addItemModal";

import styles from "./styles";
import { RootState } from "../../../redux/store";
import {
  CommodityData,
  useGetCommoditiesQuery,
} from "../../../redux/services/commodityService";
import SearchBar from "./searchBar";

function CatalogLayout(): ReactElement {
  const [taskFormMode, setItemFromMode] = useState(false);
  const [filteredData, setFilteredData] = useState<CommodityData[]>([]);
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetCommoditiesQuery();

  useEffect(() => {
    if (data) {
      if (filter.length > 0) {
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        );
        console.log(filtered);
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    }
  }, [filter]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const { role } = useSelector((store: RootState) => store.userReducer);

  return (
    <Container maxWidth="lg" css={styles.containerStyles}>
      <Box css={styles.tasksHeaderStyles}>
        <Box display="flex" justifyContent="space-between" minWidth="1100px">
          <Typography variant="h2" fontSize="2rem" color="primary">
            Catalog
          </Typography>
          <SearchBar setFilter={setFilter} />
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
        {taskFormMode && <AddItemFrom setItemFormMode={setItemFromMode} />}
        {!isLoading &&
          data &&
          data.length > 0 &&
          [...filteredData].reverse().map((t) => {
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
