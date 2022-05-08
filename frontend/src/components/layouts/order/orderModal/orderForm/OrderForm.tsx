import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import { TakeOffAddress } from "../orderStepper/OrderStepper";

interface OrderFormProps {
  setPayment: React.Dispatch<SetStateAction<string>>;
  payment: string;
  setSelectedTakeOff: React.Dispatch<SetStateAction<string>>;
  selectedTakeOff: string;
  currentTakeOffAddress: string;
  setCurrentTakeOffAddress: React.Dispatch<SetStateAction<string>>;
  address: {
    city: string;
    street: string;
    houseNumber: string;
  };
  setAddress: React.Dispatch<
    SetStateAction<{ city: string; street: string; houseNumber: string }>
  >;
}

export default function OrderForm({
  setPayment,
  payment,
  setSelectedTakeOff,
  selectedTakeOff,
  address,
  currentTakeOffAddress,
  setCurrentTakeOffAddress,
  setAddress,
}: OrderFormProps) {
  const handleDeliveryRadio = (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setSelectedTakeOff(value);
  };

  const handlePaymentRadio = (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setPayment(value);
  };

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleTakeOffSelect = (e: SelectChangeEvent) => {
    const address = {
      city: "",
      street: "",
      houseNumber: "",
    };
    if (e.target.value.includes("Japan")) {
      address.city = "Kyoto";
      address.street = "Fukakusa Ikenouchicho";
      address.houseNumber = "2";
    } else if (e.target.value.includes("Minsk")) {
      address.city = "Minsk";
      address.street = "Kamunistyčnaja";
      address.houseNumber = "8";
    } else if (e.target.value.includes("United States")) {
      address.city = "Aurora, CO";
      address.street = "S Buckley Rd";
      address.houseNumber = "1736";
    } else if (e.target.value.includes("Germany")) {
      address.city = "München";
      address.street = "Plettstraße";
      address.houseNumber = "9";
    }
    setCurrentTakeOffAddress(e.target.value);
    setAddress(address);
  };

  return (
    <form style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          "&>*": {
            margin: "0 2rem",
          },
        }}
      >
        <FormControl sx={{ maxWidth: "240px" }}>
          <FormLabel>Delivery</FormLabel>
          <RadioGroup onChange={handleDeliveryRadio} value={selectedTakeOff}>
            <FormControlLabel
              value="TAKEOFF"
              control={<Radio />}
              label="Takeoff"
            />
            <FormControlLabel
              value="DELIVERY"
              control={<Radio />}
              label="Delivery"
            />
          </RadioGroup>
          {selectedTakeOff === "TAKEOFF" ? (
            <Select
              onChange={handleTakeOffSelect}
              value={currentTakeOffAddress}
            >
              {TakeOffAddress.map((address) => (
                <MenuItem key={address} value={address}>
                  {address}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                "&>*": { margin: "8px 0" },
              }}
            >
              <TextField onChange={addressHandler} name="city" label="City" />
              <TextField
                onChange={addressHandler}
                name="street"
                label="Street"
              />
              <TextField
                onChange={addressHandler}
                name="houseNumber"
                label="House"
              />
            </Box>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Payment</FormLabel>
          <RadioGroup onChange={handlePaymentRadio} value={payment}>
            <FormControlLabel value="CASH" control={<Radio />} label="Cash" />
            <FormControlLabel
              value="CARD"
              control={<Radio />}
              label="Credit/Debit Card"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </form>
  );
}
