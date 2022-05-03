import { css } from "@emotion/react";

const formStyles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  "& > *": {
    margin: "10px",
  },
});

const styles = { formStyles };
export default styles;
