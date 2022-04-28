import { css } from "@emotion/react";
import mainImg from "../../../assets/main4.jpg";

const wrapperStyle = css({
  padding: "20px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

const welcomeContainerStyle = css({
  "&: hover": {
    backgroundSize: "110%",
  },
  "&: hover .welcomeText": {
    opacity: "1",
    backgroundColor: "rgba(0, 0, 0, 0.288)",
  },
  width: "100%",
  height: "600px",
  backgroundImage: `url(${mainImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  objectFit: "cover",
  backgroundPositionX: "50%",
  backgroundPositionY: "55%",
  cursor: "pointer",
  overflow: "hidden",
  transition: "background-size .2s ease-in",
});

const welcomeTextStyle = css({
  opacity: "0",
  width: "100%",
  height: "100%",
  fontSize: "40px",
  color: "#fff",
  textTransform: "uppercase",
  transition: "all 0.4s ease-in-out",
});

const welcomeTextTitleStyle = css({
  margin: "0",
  fontSize: "40px",
  fontWeight: "bold",
  padding: "250px 0px 0px 70px",
});

const styles = {
  wrapperStyle,
  welcomeContainerStyle,
  welcomeTextStyle,
  welcomeTextTitleStyle,
};

export default styles;
