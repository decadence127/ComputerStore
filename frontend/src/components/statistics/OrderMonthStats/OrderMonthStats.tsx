import { Paper, Box, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { OrderData } from "../../../redux/services/orderService";
import { ResponsivePie } from "@nivo/pie";
import { useCallback } from "react";

interface OrderDayStatsProps {
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

export default function OrderMonthStats({ orders }: OrderDayStatsProps) {
  const thisMonthOrders = useCallback(() => {
    return orders.filter((order) => {
      const orderDate = new Date(order.orderDate);
      const thisMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth()
      );
      return orderDate.getTime() >= thisMonth.getTime();
    });
  }, [orders]);

  const totalPrices = thisMonthOrders().map((order) => {
    return order.commodities.reduce(
      (acc, curr): { value: number; orderDate: string } => {
        return { value: acc.value + curr.price, orderDate: order.orderDate };
      },
      { value: 0, orderDate: "" }
    );
  });
  const randomColors = totalPrices.map(() => {
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
            <Box>{`${entry.orderDate} - ${entry.value} BYN`}</Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Paper elevation={4} sx={{ width: "700px", height: "600px" }}>
      <Typography padding={5} variant="h5" color="primary">
        Monthly order rate
      </Typography>
      {totalPrices.length > 0 && (
        <>
          <ResponsiveContainer maxHeight={300}>
            <PieChart width={4} height={5}>
              <Pie
                data={totalPrices}
                dataKey="value"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
              >
                {totalPrices.map((order, index) => (
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
            payload={totalPrices}
            content={LegendContent}
          />
        </>
      )}
    </Paper>
  );
}
