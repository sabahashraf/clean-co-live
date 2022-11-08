import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import Services from "./pages/Services";
import About from "./pages/About";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
// ..

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login " element={<Login></Login>}></Route> */}
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
        {/* <Route
          path="/services"
          element={
            <PrivateRoute>
              <Services></Services>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About></About>
            </PrivateRoute>
          }
        ></Route> */}
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
        <Route element={<AdminRoute></AdminRoute>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="add-admin" element={<AddAdmin></AddAdmin>}></Route>
            <Route
              path="add-service"
              element={<AddService></AddService>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
