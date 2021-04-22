import HomePage from "../layouts/HomePage";
import DetailPage from "../layouts/DetailPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    title: "Homepage",
  },
  {
    path: "/details",
    component: DetailPage,
    title: "Movie Detail",
  },
];
export default routes;
