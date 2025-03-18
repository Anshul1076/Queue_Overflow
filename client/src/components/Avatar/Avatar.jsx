import React from "react";

const Avatar = ({
  children = "👤", // Default PFP
  backgroundColor = "#ccc",
  size = "40px", // Default size
  color = "white",
  cursor,
}) => {
  const style = {
    backgroundColor,
    width: size,
    height: size,
    color,
    borderRadius: "50%", // Make it round
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: cursor || "pointer",
    textDecoration: "none",
    userSelect: "none",
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
