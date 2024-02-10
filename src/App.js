import CityInfo from "./components/CityInfo";
import TreeMap from "./components/TreeMap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <TreeMap /> */}
      <Router>
        <Routes>
          <Route path="/" element={<TreeMap />} />
          <Route path="/CityInfo" element={<CityInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
