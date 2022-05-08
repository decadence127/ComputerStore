import { Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
//@ts-ignore
import CreditCardInput from "react-credit-card-input";

interface CreditCardLayoutProps {
  cardInfo: {
    cvc: string;
    expiry: string;
    focus: string;
    name: string;
    number: string;
  };
  setCardInfo: React.Dispatch<
    SetStateAction<{
      cvc: string;
      expiry: string;
      focus: string;
      name: string;
      number: string;
    }>
  >;
}

export default function CreditCardLayout({
  cardInfo,
  setCardInfo,
}: CreditCardLayoutProps) {
  const handleNumberChange = (e: any) => {
    const { value } = e.target;

    setCardInfo({ ...cardInfo, number: value });
  };
  const handleCVCChange = (e: any) => {
    const { value } = e.target;

    setCardInfo({ ...cardInfo, cvc: value });
  };
  const handleExpiryChange = (e: any) => {
    const { value } = e.target;

    setCardInfo({ ...cardInfo, expiry: value });
  };
  console.log(cardInfo);

  return (
    <div id="PaymentForm">
      <Typography sx={{ margin: "20px 10px" }} color="primary" variant="body1">
        Input credit card credentials
      </Typography>
      <CreditCardInput
        cardNumberInputProps={{
          value: cardInfo.number,
          onChange: handleNumberChange,
        }}
        cardCVCInputProps={{
          value: cardInfo.cvc,
          onChange: handleCVCChange,
        }}
        cardExpiryInputProps={{
          value: cardInfo.expiry,
          onChange: handleExpiryChange,
        }}
      />
    </div>
  );
}
