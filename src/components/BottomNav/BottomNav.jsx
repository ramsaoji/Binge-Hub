import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value === "Trending") {
      navigate("/");
    } else if (value === "Movies") {
      navigate("/movies");
    } else if (value === "TV Series") {
      navigate("/series");
    } else if (value === "Search") {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "#2f173a",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trending"
          value="Trending"
          icon={<Whatshot />}
        />
        <BottomNavigationAction
          label="Movies"
          value="Movies"
          icon={<Movie />}
        />
        <BottomNavigationAction
          label="TV Series"
          value="TV Series"
          icon={<Tv />}
        />
        <BottomNavigationAction
          label="Search"
          value="Search"
          icon={<Search />}
        />
      </BottomNavigation>
    </Box>
  );
}
