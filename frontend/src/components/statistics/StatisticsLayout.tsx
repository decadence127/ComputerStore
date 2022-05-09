import { Container, Typography, Box, Button } from "@mui/material";
import { useGetOrdersQuery } from "../../redux/services/orderService";
import AccountOrdersStats from "./AccountOrdersStats/AccountOrdersStats";
import DeliveryStats from "./DeliveryStats/DeliveryStats";
import OrderMonthStats from "./OrderMonthStats/OrderMonthStats";
import PaymentStats from "./PaymentStats/PaymentStats";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function StatisticsLayout() {
  const { data: ordersData } = useGetOrdersQuery();
  const pdfHandler = () => {
    const input = document.getElementById("statistics");
    html2canvas(input!).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "pt", "a4", false);
      //@ts-ignore
      pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
      pdf.save("statsReport.pdf");
    });
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "100vh", paddingTop: "3rem", marginBottom: "1rem" }}
    >
      <Box display="flex" justifyContent="space-around">
        <Typography color="primary" variant="h3" marginBottom={3}>
          Statistics
        </Typography>
        <Box>
          <Button onClick={pdfHandler} variant="contained">
            Download as PDF
          </Button>
        </Box>
      </Box>
      <Box id="statistics">
        <Box
          sx={{
            display: "flex",
            minWidth: "100%",
            "&>*": { margin: "0.5rem" },
          }}
        >
          <Box>{ordersData && <OrderMonthStats orders={ordersData} />}</Box>
          <Box>{ordersData && <AccountOrdersStats orders={ordersData} />}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            minWidth: "100%",
            "&>*": { margin: "0.5rem" },
          }}
        >
          <Box>{ordersData && <PaymentStats orders={ordersData} />}</Box>
          <Box>{ordersData && <DeliveryStats orders={ordersData} />}</Box>
        </Box>
      </Box>
    </Container>
  );
}
