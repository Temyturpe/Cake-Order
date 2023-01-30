import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import { menuData } from "./components/menu/menudata";

function App() {
  return (
    <div className="App bg-lite overflow-hidden">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/detailpage/:id"
            element={<Detailpage item={menuData} />}
          />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
