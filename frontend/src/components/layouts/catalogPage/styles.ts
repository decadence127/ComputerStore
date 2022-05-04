/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const tasksWrapperStyles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 150px",
  position: "relative",
});

const tasksHeaderStyles = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

const tasksHeaderTitleWrapperStyles = css({
  color: "#004ED7",
});

const createTaskButtonStyles = css({
  width: "200px",
});

const loadMoreButtonStyles = css({
  margin: "20px",
  width: "200px",
});

const containerStyles = css({
  marginTop: "3rem",
  marginBottom: "3rem",
  minHeight: "100vh",
});

const styles = {
  tasksWrapperStyles,
  tasksHeaderStyles,
  tasksHeaderTitleWrapperStyles,
  createTaskButtonStyles,
  loadMoreButtonStyles,
  containerStyles,
};

export default styles;
