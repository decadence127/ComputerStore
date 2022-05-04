/** @jsxImportSource @emotion/react */
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { CommodityData } from "../../../../redux/services/commodityService";
import styles from "../styles";

import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

export default function DeviceContainer({ item }: { item: CommodityData }) {
  return (
    <Container css={styles.containerStyles}>
      <Paper elevation={3} css={styles.paperWrapper}>
        <Box css={styles.boxWrapper}>
          <Box css={styles.imgWrapper}>
            <NoPhotographyIcon sx={{ fontSize: 180 }} />
            <Box sx={{ minWidth: "30%" }}>
              <Typography variant="h3">{item.name}</Typography>
            </Box>
          </Box>
          <Box sx={{ minHeight: "35%", marginTop: "2rem" }}>
            <Typography color="darkslategray" variant="h5" fontStyle="italic">
              {item.description}
            </Typography>
          </Box>
          <Box css={styles.footerBox}>
            <Typography variant="h4" fontWeight={500}>
              {item.price} <Typography component="span">BYN</Typography>
            </Typography>
            <Button variant="contained">Add to cart</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
