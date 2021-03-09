import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/general/navbar/navbar.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home.page";
import About from "./pages/about.page";
import Contact from "./pages/contact.page";
import Insights from "./pages/insights.page";
import NotFound from "./pages/not-found.page";
import Header from "./components/home/header/Header.js";
import HeaderLinks from "./components/home/header/HeaderLinks.js";
import Footer from "./components/general/footer.component";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

let ps;

function App(props) {
  const mainPanel = React.createRef();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { ...rest } = props;
  // ref to help us initialize PerfectScrollbar on windows devices

  console.log("mainPanel1>>", mainPanel);

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  // initialize and destroy the PerfectScrollbar plugin
  // React.useEffect(() => {
  //   console.log("mainPanel>>", mainPanel);
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps = new PerfectScrollbar(mainPanel.current, {
  //       suppressScrollX: true,
  //       suppressScrollY: false,
  //     });
  //     // document.body.style.overflow = "hidden";
  //   }
  //   window.addEventListener("resize", resizeFunction);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //     }
  //     window.removeEventListener("resize", resizeFunction);
  //   };
  // }, [mainPanel]);
  return (
    <div>
      {/* <Navbar /> */}
      <Header
        brand="Victor & Associates"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/about-us"
          exact
          render={(props) => <About {...props} />}
        />
        <Route
          path="/contact-us"
          exact
          render={(props) => <Contact {...props} />}
        />
        <Route
          path="/insights"
          exact
          render={(props) => <Insights {...props} />}
        />
        <Route path="/404" exact render={(props) => <NotFound {...props} />} />
        <Redirect to="/404" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
