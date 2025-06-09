import Home from "./Home/Home";
import Animation from "./pages/Animation";
import Bollywood from "./pages/Bollywood";
import Hollywood from "./pages/Hollywood";
import WebSeries from "./pages/WebSeries";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/bollywood",
    component: Bollywood,
  },
  {
    path: "/hollywood",
    component: Hollywood,
  },
  {
    path: "/animation",
    component: Animation,
  },
  {
    path: "/web-series",
    component: WebSeries,
  },
];
