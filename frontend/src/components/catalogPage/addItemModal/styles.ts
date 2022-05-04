/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const taskWrapperStyles = css({
  "& h2,p": {
    margin: "0px",
  },
  display: "flex",
  flexDirection: "column",
  padding: "30px 0px 30px 50px",
  border: "1px solid rgb(139, 139, 139)",
  borderRadius: "5px",
  margin: "20px 0px",
  color: "#808080",
  fontStyle: "italic",
  width: "960px",
  fontSize: "20px",
});

const inputWrapperStyles = css({
  minWidth: "200px",
  maxWidth: "93.3%",
  height: "90px",
});

const textAreaWrapperStyles = css({
  minWidth: "200px",
  maxWidth: "93.3%",
});

const buttonsWrapperStyles = css({
  display: "flex",
  flexDirection: "row",
  padding: "0px 0px 0px 16px",
  borderRadius: "5px",
  margin: "10px 0px",
  fontSize: "20px",
});

const addButtonWrapperStyles = css({
  marginRight: "20px",
});

const closeButtonStyles = css({
  "&: hover": {
    backgroundColor: "#a8a7a7",
  },
  background: "#929191",
});

const inputStyles = css({
  width: "100%",
  display: "flex",
  flexFlow: "column wrap",
});

const styles = {
  taskWrapperStyles,
  inputWrapperStyles,
  textAreaWrapperStyles,
  buttonsWrapperStyles,
  addButtonWrapperStyles,
  closeButtonStyles,
  inputStyles,
};

export default styles;
