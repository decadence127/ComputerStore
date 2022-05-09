import { Paper, Box, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { OrderData } from "../../../redux/services/orderService";
import { ResponsivePie } from "@nivo/pie";
import { useCallback } from "react";
import { UserState } from "../../../redux/slices/userSlice";

interface DeliveryStatsProps {
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

export default function DeliveryStats({ orders }: DeliveryStatsProps) {
  const deliveryMethods = useCallback(() => {
    return orders.reduce(
      (acc, curr): { deliveryMethod: string; value: number }[] => {
        const deliveryMethod = curr.delivery;
        const value = curr.commodities.length;
        const deliveryMethodOrder = { deliveryMethod, value };
        if (acc.find((order) => order.deliveryMethod === deliveryMethod)) {
          const index = acc.findIndex(
            (order) => order.deliveryMethod === deliveryMethod
          );
          acc[index].value += value;
        } else {
          acc.push(deliveryMethodOrder);
        }
        return acc;
      },
      [{ deliveryMethod: "", value: 0 }]
    );
  }, [orders]);

  const paymentMethodsData = deliveryMethods();
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
            <Box>{`${entry.deliveryMethod} - ${entry.value} Entries`}</Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Paper elevation={4} sx={{ width: "700px", height: "600px" }}>
      <Typography padding={5} variant="h5" color="primary">
        Delivery methods statistics
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
