import { Container, Typography, Box } from "@mui/material";

export default function TakeoffsLayout() {
  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Box sx={{ padding: 3 }}>
        <Typography color="primary" variant="h2">
          Delivery places
        </Typography>
      </Box>
      <div style={{ width: "60vw", height: "50vh", overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1x8_WtbH16sIcqC0SR8fIPFsFJp7daeif&ehbc=2E312F"
          loading="lazy"
          style={{
            border: "0px",
            width: "100%",
            height: "500px",
            padding: "0",
            marginTop: "-50px",
          }}
          title="map"
        ></iframe>
        <ul style={{ position: "absolute", zIndex: "100" }}>
          <li>vulica Kamunistyčnaja 8, Minsk 220029</li>
          <li>
            〒612-0031 Kyoto, Fushimi Ward, Fukakusa Ikenouchicho, 2, Kyoto,
            Japan
          </li>
          <li>1736 S Buckley Rd, Aurora, CO 80017, United States</li>
          <li>Plettstraße 9, 81735 München, Germany</li>
        </ul>
      </div>
    </Container>
  );
}
