import { InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "60%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface ISearchBar {
  setSearch:React.Dispatch<React.SetStateAction<string>>;
  search?:string;
}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { setSearch, search } = props;
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
