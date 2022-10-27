import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import AllProductPageContainer from "./Containers/AllProductPageContainer";
import WaitingListPageContainer from "./Containers/WaitingListPageContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/menu" exact element={<AllProductPageContainer />} />
        <Route path="/waiting-list" exact element={<WaitingListPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
