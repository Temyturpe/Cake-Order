import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-lite overflow-hidden">
      <Topbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
