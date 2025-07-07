import React from "react";
import Button from "@mui/material/Button";
type LinkButtonProps = {
  link: string;
  content: string;
  color: string;
};

export const LinkButton = ({ link, content, color }: LinkButtonProps) => {
  return (
    <Button
      variant="outlined"
      href={link}
      target="_blank"
      sx={{
        transition: "all 0.3s",
        color: color,
        borderColor: color,
        "&:hover": { backgroundColor: color, color: "#fff" },
      }}

    >
      {content}
    </Button>
  );
};
