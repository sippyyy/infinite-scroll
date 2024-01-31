import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const TypoStyle = styled(Typography)({
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "50%",
    height: "10%",
    background: "#222016",
  },
});

interface ICategoryProps {
  title: string;
}

const CategoryName: React.FC<ICategoryProps> = (props) => {
  const { title } = props;
  return (
    <TypoStyle variant="h4" sx={{ paddingY: 1, display:"inline-block" }}>
      {title}
    </TypoStyle>
  );
};

export default CategoryName;
