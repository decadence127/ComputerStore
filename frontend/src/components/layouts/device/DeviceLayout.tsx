/** @jsxImportSource @emotion/react */
import { Box, Container, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetCommodityQuery } from "../../../redux/services/commodityService";
import styles from "./styles";
export default function DeviceLayout() {
  const { id } = useParams();
  const { data, isLoading } = useGetCommodityQuery({ id: Number(id) });
  console.log("rendered");

  return (
    <>
      {isLoading && <LinearProgress />}
      <Container>
        <Box css={styles.boxWrapper}>
          {" "}
          {data && <div>Device: {JSON.stringify(data)}</div>}
        </Box>
      </Container>
    </>
  );
}
