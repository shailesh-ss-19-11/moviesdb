import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Animation from "./pages/Animation";
import { routes } from "./Routes";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <div className="container">
        <Routes>
          {routes.length > 0
            ? routes.map((route) => {
                return (
                  <Route path={route.path} element={<route.component />} />
                );
              })
            : null}
        </Routes>
        {/* <Home searchInput={searchInput} /> */}
      </div>
    </div>
  );
}

export default App;
