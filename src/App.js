import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/home/Home.js";
import AllRoute from "./routes/AllRoute.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AllRoute />
      </Router>
    </div>
  );
}

export default App;
