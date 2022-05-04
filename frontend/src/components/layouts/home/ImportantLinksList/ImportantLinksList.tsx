import { Grid, Box, Typography } from "@mui/material";

export default function ImportantLinksList() {
  return (
    <Box sx={{ display: "flex", flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography
            variant="h4"
            fontWeight="bold"
            component="h1"
            gutterBottom
            color="primary"
            sx={{ paddingBottom: 3 }}
          >
            Important links
          </Typography>
          <ul>
            <li>asdas</li>
            <li>asdas</li>
            <li>asdas</li>
            <li>asdas</li>
          </ul>
        </Grid>
        <Grid item xs>
          <Typography
            variant="h4"
            fontWeight="bold"
            component="h1"
            gutterBottom
            color="primary"
            sx={{ paddingBottom: 3 }}
          >
            Popular brands
          </Typography>
          <ul>
            <li>Apple</li>
            <li>MSI</li>
            <li>Asus</li>
            <li>Acer</li>
          </ul>
        </Grid>
        <Grid item xs>
          <Typography
            variant="h4"
            fontWeight="bold"
            component="h1"
            gutterBottom
            color="primary"
            sx={{ paddingBottom: 3 }}
          >
            Mostly searched
          </Typography>
          <ul>
            <li>asdas</li>
            <li>asdas</li>
            <li>asdas</li>
            <li>asdas</li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}
