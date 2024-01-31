import * as React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import SearchBar from "./SearchBar";
import { useSearchValue } from "../../context/searchContext";
const NavBar: React.FC = () => {
  const { search, setSearch } = useSearchValue();
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <SearchBar search={search} setSearch={setSearch} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
