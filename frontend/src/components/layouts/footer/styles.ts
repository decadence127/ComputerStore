/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerStyles = css({
  display: "flex",
  padding: "0.5rem 0.75rem 0.5rem 0.75rem",
  marginTop: "auto",
  width: "calc(100vw-0.75rem)",
  height: "120px",
  boxShadow: "0 -4px 8px -2px rgba(115,115,115,0.75)",
  zIndex: 5,
});

const flexColumn = css({
  display: "flex",
  alignItems: "center",
});

const imgBoxStyles = css({
  paddingTop: "20px",
  maxHeight: "5.75rem",
  marginLeft: "2.75rem",
  maxWidth: "8.5rem",
  "&:hover": {
    cursor: "pointer",
  },
});
const mottoStyles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  marginBottom: "25px",
  marginLeft: "25px",
});

const copyrightTypographyStyles = css({
  marginLeft: "2.75rem",
  marginTop: "1rem",
  maxWidth: "180px",
});

const hoverableTypography = css({
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "ActiveCaption",
  },
});
const iconStyles = css({
  "&:hover": {
    color: "ActiveCaption",
  },
});
const contactUsButtonContainerStyles = css({
  display: "flex",
  alignItems: "center",
  padding: "0px 70px 0px 0px",
});
const contactsInfoWrapperStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});
const socialIconsWrapperStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  marginLeft: "50px",
});

const styles = {
  footerStyles,
  imgBoxStyles,
  mottoStyles,
  copyrightTypographyStyles,
  flexColumn,
  hoverableTypography,
  iconStyles,
  contactUsButtonContainerStyles,
  contactsInfoWrapperStyles,
  socialIconsWrapperStyles,
};

export default styles;
