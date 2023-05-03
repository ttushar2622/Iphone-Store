import { Dashboard } from "./admin/dashboard";
import NavbarTop from "./component/NavbarTop";
import Navbarbottom from "./component/Navbarbottom";
import Homepage from "./pages/Homepage";
import IpadPage from "./pages/IpadPage";

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
      <Homepage />
     </div>
  );
}

export default App;
