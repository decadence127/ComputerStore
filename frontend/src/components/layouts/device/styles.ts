import { css } from "@emotion/react";

const boxWrapper = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
});

const paperWrapper = css({
  width: "80%",
  minHeight: "30rem",
  border: "1px solid #dadada",
  display: "flex",
  paddingBottom: "5rem",
});

const imgWrapper = css({
  display: "flex",
  justifyContent: "space-between",
});

const containerStyles = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const footerBox = css({
  marginTop: "4rem",
  display: "flex",
  justifyContent: "space-around",
});

const drawerInnerBox = css({
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
});

const styles = {
  paperWrapper,
  drawerInnerBox,
  imgWrapper,
  boxWrapper,
  containerStyles,
  footerBox,
};

export default styles;
