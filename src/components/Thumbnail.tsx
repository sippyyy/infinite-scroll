import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../themes/main_theme";
import storeImg from '../assets/img/store.png'

const Thumbnail: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", paddingY: 10 }}>
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={6} item sx={{ margin: "auto" }}>
              <Typography variant="h3">
                Comfortable with various options
              </Typography>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                animi distinctio neque reiciendis quam esse fugiat soluta dicta,
                deleniti autem, eius enim beatae! Neque voluptatibus explicabo
                officia ratione rerum quasi.
              </Typography>
              <Button
                sx={{ marginY: 2 }}
                variant="outlined"
                color="secondary"
                size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
              >
                Shop now
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img
                style={{ width: "80%" }}
                src={storeImg}
                alt="thumbnail"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Thumbnail;
