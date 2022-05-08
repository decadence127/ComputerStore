import { Typography } from "@mui/material";
import { useState } from "react";
//@ts-ignore
import CreditCardInput from "react-credit-card-input";

export default function CreditCardLayout() {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
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
