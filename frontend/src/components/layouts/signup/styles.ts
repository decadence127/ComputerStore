import { css } from "@emotion/react";

const wrapperContainer = css({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const innerBox = css({
  borderRadius: "10px",
  display: "flex",
  "& > form": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  marginTop: "2rem",
  minWidth: "48rem",
  minHeight: "22rem",
});
const captionBox = css({
  display: "flex",
  marginTop: "2rem",
  "& > p": {
    marginRight: "5px",
  },
});

const styles = { wrapperContainer, innerBox, captionBox };
export default styles;
