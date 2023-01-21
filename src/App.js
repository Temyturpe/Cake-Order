import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-lite overflow-hidden">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
