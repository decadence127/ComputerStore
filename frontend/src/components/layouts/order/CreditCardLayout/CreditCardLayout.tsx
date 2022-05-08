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
  const handleInputFocus = (e: any) => {
    setCardInfo({ ...cardInfo, focus: e.target.name });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <div id="PaymentForm">
      <Typography sx={{ margin: "20px 10px" }} color="primary" variant="body1">
        Input credit card credentials
      </Typography>
      <CreditCardInput />
    </div>
  );
}
