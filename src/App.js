import { Route, Routes } from "react-router";
import "./App.css";

import LandingPage from "./components/landingpage/LandingPage";
import Login from "./components/authentication/login/Login";
import Signup from "./components/authentication/signup/Signup";
import ChattMain from "./components/ChattPageMain/ChattMain";
// import Index from "./components/chattPage/index";
// import ShowData from "./components/chattPage/UserChatt/onclickShowData/ShowData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chattmain" element={<ChattMain />} />
        {/* <Route path="/chattmain" element={<Index />} /> */}
        {/* <Route path="/showData" element={<ShowData />} /> */}
      </Routes>
    </div>
  );
}

export default App;
