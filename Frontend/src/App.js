import Router from "./AllRoutes/Router";
import Foot from "./component/Foot";
import NavbarTop from "./component/NavbarTop";
import Navbarbottom from "./component/Navbarbottom";



function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "rgb(67, 67, 68)",
          height: "50px",
          zIndex: "100",
        }}>
        <NavbarTop />
        <Navbarbottom />
      </div>{" "}
      <br /> <br /> <br /> <br />
      <Router />
      <Foot/>
    </div>
  );
}

export default App;
