/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const appBarStyles = css({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgb(34, 34, 34)!important",
  height: "4.25rem",
});

const imgBoxStyles = css({
  maxHeight: "5.75rem",
  maxWidth: "8.5rem",
  margin: "8px 0px 8px 32px",
  userSelect: "none",
  MozUserSelect: "-moz-none",
});
const toolBarStyles = css({
  display: "flex",
  justifyContent: "space-between",
});

const linkStyle = css({
  textDecoration: "none",
  lineHeight: "0",
});

const styles = { imgBoxStyles, appBarStyles, toolBarStyles, linkStyle };

export default styles;
