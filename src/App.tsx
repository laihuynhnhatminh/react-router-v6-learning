import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/vans"} element={<Vans />} />
        <Route path={"/vans/:id"} element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
