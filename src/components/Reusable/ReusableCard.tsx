import { Box, Rating, Tooltip, Typography } from "@mui/material";
import React from "react";

interface IReusableCardProps {
  img: string;
  name: string;
  detail: string;
  price: number;
  rating: number;
}

const ReusableCard: React.FC<IReusableCardProps> = (props) => {
  const { img, name, detail, price, rating } = props;
  return (
    <Box>
      <img
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
        src={img}
        alt="product_image"
      />
      <Box paddingY={2}>
        <Box
          sx={{display: { lg: "flex" } , justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="body1" component="h6" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Tooltip arrow title={`${rating}/5`}>
            <Box display="inline-block">
              <Rating
                name="read-only"
                value={rating}
                size="small"
                readOnly
                precision={0.1}
              />
            </Box>
          </Tooltip>
        </Box>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {detail}
        </Typography>
        <Typography display={"block"} variant="h6" component={"span"}>
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReusableCard;
