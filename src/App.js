import "./styles.css";
import Dashborad from "./Pages/Dashboard";
import RegeisterpageTwo from "./Pages/RegisterPageTwo";
import Dashboard from "./Pages/Dashboard";
import Regeisterpageone from "./Pages/RegisterPageOne";


import {
  Routes,

  Route,
  Link
} from "react-router-dom";

export default function App() {
  let header = "app";

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/register/one" element={<Regeisterpageone />}></Route>
        <Route path="/register/two" element={<RegeisterpageTwo></RegeisterpageTwo>}></Route>
      </Routes>
    </div>
  );
}






