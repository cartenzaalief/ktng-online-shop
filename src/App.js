import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <Box>
      <Navbar />
      <Box mt={20}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
