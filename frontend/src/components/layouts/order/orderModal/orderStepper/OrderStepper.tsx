import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

import CreditCardLayout from "../../CreditCardLayout/CreditCardLayout";
import OrderConfirmation from "../../OrderConfirmation/OrderConfirmation";
import OrderForm from "../orderForm/OrderForm";
import {
  setOrderAddress,
  setPayment,
} from "../../../../../redux/slices/orderSlice";
import { useAddOrderMutation } from "../../../../../redux/services/orderService";
import { RootState } from "../../../../../redux/store";

const steps = ["Fill the form", "Fill payment information", "Confirm the form"];

export const TakeOffAddress = [
  "vulica Kamunistyčnaja 8, Minsk 220029",
  "〒612-0031 Kyoto, Fushimi Ward, Fukakusa Ikenouchicho, 2, Kyoto, Japan",
  "1736 S Buckley Rd, Aurora, CO 80017, United States",
  "Plettstraße 9, 81735 München, Germany",
];

export default function OrderStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [makeOrder, { isLoading }] = useAddOrderMutation();
  const order = useSelector((store: RootState) => store.orderReducer);
  const [stepsState, setStepsState] = React.useState(steps);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [selectedPayment, setSelectedPayment] = useState("CARD");
  const [selectedTakeOff, setSelectedTakeOff] = useState("TakeOff");
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const [currentTakeOffAddress, setCurrentTakeOffAddress] = useState(
    TakeOffAddress[0]
  );
  const dispatch = useDispatch();
  const [address, setAddress] = useState<{
    city: string;
    street: string;
    houseNumber: string;
  }>({ city: "Minsk", street: "Kamunistyčnaja", houseNumber: "8" });

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (activeStep === 0) {
      dispatch(setPayment(selectedPayment));
      dispatch(setOrderAddress(address));
    }

    if (activeStep === stepsState.length - 1) {
      const { id, ...rest } = order;
      const result = await makeOrder(rest);
      console.log(result);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "22rem",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
      }}
    >
      <Stepper activeStep={activeStep}>
        {stepsState.map((label, index) => {
          const stepProps: { completed?: boolean; disabled?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          if (
            selectedPayment === "CASH" &&
            index === 1 &&
            stepsState.length === 3
          ) {
            setStepsState((prev) => [...prev.splice(1, 1)]);
            return null;
          }
          if (
            selectedPayment === "CARD" &&
            index === 1 &&
            stepsState.length === 2
          ) {
            setStepsState((prev) => [
              ...prev.splice(1, 0, "Fill payment information"),
            ]);
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === stepsState.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Your order has been created!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <Box sx={{ paddingTop: "1rem" }}>
              <OrderForm
                currentTakeOffAddress={currentTakeOffAddress}
                setCurrentTakeOffAddress={setCurrentTakeOffAddress}
                address={address}
                setAddress={setAddress}
                selectedTakeOff={selectedTakeOff}
                setSelectedTakeOff={setSelectedTakeOff}
                payment={selectedPayment}
                setPayment={setSelectedPayment}
              />
            </Box>
          )}
          {activeStep === 1 && selectedPayment === "CARD" && (
            <Box sx={{ paddingTop: "1rem" }}>
              <CreditCardLayout cardInfo={cardInfo} setCardInfo={setCardInfo} />
            </Box>
          )}
          {activeStep === 1 && selectedPayment === "CASH" && (
            <Box sx={{ paddingTop: "1rem" }}>
              <OrderConfirmation />
            </Box>
          )}
          {activeStep === 2 && selectedPayment === "CARD" && (
            <Box sx={{ paddingTop: "1rem" }}>
              <OrderConfirmation />
            </Box>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              disabled={
                activeStep === 1 &&
                selectedPayment === "CARD" &&
                cardInfo.number === ""
              }
            >
              {activeStep === stepsState.length - 1 ? "Order" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
