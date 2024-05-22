import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Stack } from "@mui/joy";
//TODO powiekszyc wszystko o 25%
function App() {
  return (
    <Stack justifyContent={"space-between"} sx={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />

      <Footer />
    </Stack>
  );
}

export default App;
