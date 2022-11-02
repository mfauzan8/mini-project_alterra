import HomePage from "./Components/HomePage";
import AllProductPageContainer from "./Containers/AllProductPageContainer";
import WaitingListPageContainer from "./Containers/WaitingListPageContainer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
