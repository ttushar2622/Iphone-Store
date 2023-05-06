import Router from "./AllRoutes/Router";
import Footer from "./component/Footer";
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
        {/* <Navbarbottom /> */}
      </div>{" "}
      <br /> <br /> <br /> <br />
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
