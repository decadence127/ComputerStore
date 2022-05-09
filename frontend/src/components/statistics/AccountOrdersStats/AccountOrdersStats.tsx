import { Paper, Box, Typography } from "@mui/material";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { OrderData } from "../../../redux/services/orderService";
import { ResponsivePie } from "@nivo/pie";
import { useCallback } from "react";
import { UserState } from "../../../redux/slices/userSlice";

interface AccountOrdersStatsProps {
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

export default function AccountOrdersStats({
  orders,
}: AccountOrdersStatsProps) {
  const accountOrders = useCallback(() => {
    return orders.reduce(
      (acc, curr): { accountName: string; value: number }[] => {
        const account = curr.account as UserState;
        const accountName = `${account.accountData.firstname} ${account.accountData.lastname}`;
        const value = curr.commodities.length;
        const accountOrder = { accountName, value };
        if (acc.find((order) => order.accountName === accountName)) {
          const index = acc.findIndex(
            (order) => order.accountName === accountName
          );
          acc[index].value += value;
        } else {
          acc.push(accountOrder);
        }
        return acc;
      },
      [{ accountName: "", value: 0 }]
    );
  }, [orders]);

  const accountOrdersData = accountOrders();
  accountOrdersData.shift();

  console.log(accountOrdersData);
  const randomColors = accountOrdersData.map(() => {
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
            <Box>{`${entry.accountName} - ${entry.value} Items`}</Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Paper elevation={4} sx={{ width: "700px", height: "600px" }}>
      <Typography padding={5} variant="h5" color="primary">
        User's order rate
      </Typography>
      {accountOrdersData.length > 0 && (
        <>
          <ResponsiveContainer maxHeight={300}>
            <PieChart width={4} height={5}>
              <Pie
                data={accountOrdersData}
                dataKey="value"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
              >
                {accountOrdersData.map((order, index) => (
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
            payload={accountOrdersData}
            content={LegendContent}
          />
        </>
      )}
    </Paper>
  );
}
