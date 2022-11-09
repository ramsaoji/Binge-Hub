import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./components/Theme/Theme";
import Navbar from "./components/Navbar/Navbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container sx={{ py: "4rem" }}>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
        <BottomNav />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
