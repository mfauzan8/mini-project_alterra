import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import AllProductPage from "./Components/AllProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/menu" exact element={<AllProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
