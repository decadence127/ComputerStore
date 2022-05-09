import { Paper, Box, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { OrderData } from "../../../redux/services/orderService";
import { ResponsivePie } from "@nivo/pie";
import { useCallback } from "react";
import { UserState } from "../../../redux/slices/userSlice";

interface PaymentStatsProps {
  orders: OrderData[];
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#9c5734",
  "#BAD7F2",
  "#F2BAC9",
  "#F2E2BA",
  "#47A8BD",
];
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export default function PaymentStats({ orders }: PaymentStatsProps) {
  const paymentMethods = useCallback(() => {
    return orders.reduce(
      (acc, curr): { paymentMethod: string; value: number }[] => {
        const paymentMethod = curr.payment;
        const value = curr.commodities.length;
        const paymentMethodOrder = { paymentMethod, value };
        if (acc.find((order) => order.paymentMethod === paymentMethod)) {
          const index = acc.findIndex(
            (order) => order.paymentMethod === paymentMethod
          );
          acc[index].value += value;
        } else {
          acc.push(paymentMethodOrder);
        }
        return acc;
      },
      [{ paymentMethod: "", value: 0 }]
    );
  }, [orders]);

  const paymentMethodsData = paymentMethods();
  paymentMethodsData.shift();

  const randomColors = paymentMethodsData.map(() => {
    return `#${randomColor()}`;
  });

  const LegendContent = (props: any) => {
    const { payload } = props;

    return (
      <Box display="flex" flexDirection="column">
        {payload.map((entry: any, index: number) => (
          <Box key={index} ml={8} display="flex" alignItems="center">
            <Box
              width={10}
              height={10}
              style={{
                backgroundColor: randomColors[index % randomColors.length],
                marginRight: 10,
                marginLeft: 20,

                borderRadius: "50%",
              }}
            />
            <Box>{`${entry.paymentMethod} - ${entry.value} Entries`}</Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Paper elevation={4} sx={{ width: "700px", height: "600px" }}>
      <Typography padding={5} variant="h5" color="primary">
        Payment methods statistics
      </Typography>
      {paymentMethodsData.length > 0 && (
        <>
          <ResponsiveContainer maxHeight={300}>
            <PieChart width={4} height={5}>
              <Pie
                data={paymentMethodsData}
                dataKey="value"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
              >
                {paymentMethodsData.map((order, index) => (
                  <Cell
                    key={index}
                    fill={randomColors[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Legend
            wrapperStyle={{ position: "relative" }}
            payload={paymentMethodsData}
            content={LegendContent}
          />
        </>
      )}
    </Paper>
  );
}
