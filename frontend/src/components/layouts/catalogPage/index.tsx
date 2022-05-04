/** @jsxImportSource @emotion/react */
import React, { ReactElement, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  InputLabel,
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

const options = [
  {
    name: "None",
    value: "None",
  },
  {
    name: "Lowest price",
    value: "ASC",
  },
  {
    name: "Highest price",
    value: "DESC",
  },
];

function CatalogLayout(): ReactElement {
  const [taskFormMode, setItemFromMode] = useState(false);
  const [filteredData, setFilteredData] = useState<CommodityData[]>([]);
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetCommoditiesQuery();
  const [sortSelect, setSortSelect] = useState("None");

  const handleChangeSelect = (e: SelectChangeEvent<string>) => {
    setSortSelect(e.target.value as any);
  };

  useEffect(() => {
    if (filteredData && sortSelect !== "None") {
      const sortedData = [...filteredData].sort((a, b) =>
        sortSelect === "Lowest price" ? a.price - b.price : b.price - a.price
      );

      console.log(sortedData);

      setFilteredData(sortedData);
    }
    if (data && sortSelect === "None") {
      setFilteredData(data);
      setFilter("");
    }
  }, [sortSelect]);

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
      const reverseData = [...data].reverse();
      setFilteredData(reverseData);
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
          <Box display="flex" sx={{ minHeight: "70px" }}>
            <FormControl fullWidth>
              <InputLabel id="select">Sort</InputLabel>
              <Select
                labelId="select"
                onChange={handleChangeSelect}
                label="Sort"
                value={sortSelect}
              >
                {options.map((item) => (
                  <MenuItem key={item.value} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ margin: "0 20px" }}>
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
        </Box>
      </Box>
      <Box css={styles.tasksWrapperStyles}>
        {taskFormMode && <AddItemFrom setItemFormMode={setItemFromMode} />}
        {!isLoading &&
          data &&
          data.length > 0 &&
          filteredData.map((t) => {
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
