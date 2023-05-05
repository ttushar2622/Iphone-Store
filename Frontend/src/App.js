// import { Router } from "react-router-dom";
import { Dashboard } from "./admin/dashboard";
import NavbarTop from "./component/NavbarTop";
import Navbarbottom from "./component/Navbarbottom";
import Homepage from "./pages/Homepage";
import IpadPage from "./pages/IpadPage";
import Iphone from "./pages/Iphone";
import Router from "./AllRouths/Router";
function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "rgb(67, 67, 68)",
          height: "50px",
        }}
      >
        <NavbarTop />
        <Navbarbottom />
     
      </div><br/><br/><br/><br/>
      <Router/>
     </div>
  );
}

export default App;
