/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const taskWrapperStyles = css({
  "& h3,p": {
    margin: "0px",
  },
  "&: hover": {
    boxShadow: "0 10px 20px 0 rgb(108 135 135 / 50%)",
    transition: "all 0.2s, transform 0.2s",
  },
  "&: hover h3": {
    color: "#004ED7",
  },
  cursor: "pointer",
  display: "flex",
  padding: "15px 0px 0px 10px",
  border: "1px solid #dadada",
  borderRadius: "4px",
  margin: "20px 0px",
  color: "#808080",
  fontStyle: "italic",
  fontSize: "13px",
  width: "1000px",
  transition: "all 0.2s, transform 0.2s",
});

const descriptionWrapperStyles = css({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  padding: "5px 10px",
  border: "1px solid #80808066",
  borderRadius: "10px",
  margin: "10px 130px 0px 16px",
});
const innerBox = css({
  display: "flex",
  flexDirection: "column",
});

const imgBox = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "100px",
});
const styles = {
  taskWrapperStyles,
  descriptionWrapperStyles,
  innerBox,
  imgBox,
};

export default styles;
