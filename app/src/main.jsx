import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import InfiniteScroll from "./pages/InfiniteScroll";
import Sort from "./pages/Sort";
import Posts from "./pages/Pagination";
import ScrollToBottom from "./pages/ScrollToBottom";
import DarkMode from "./pages/DarkMode";
import Debounce from "./pages/Debounce";
import ImageLazyLoading from "./pages/ImageLazyLoading";
import FullPageScroll from "./pages/FullPageScroll";
import ThrottleContainer from "./pages/Throttle";
import Intro from "./pages/Intro";
import Accordion from "./pages/Accordion";
import Root from "./routes/root";
import Chart from "./pages/Chart";
import ColorPicker from "./pages/ColorPicker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "color-picker",
        element: <ColorPicker />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "intro",
        element: <Intro />,
      },
      {
        path: "throttle",
        element: <ThrottleContainer />,
      },
      {
        path: "image-lazy-loading",
        element: <ImageLazyLoading />,
      },
      {
        path: "infinite-scroll",
        element: <InfiniteScroll />,
      },
      {
        path: "sort",
        element: <Sort />,
      },
      {
        path: "pagination",
        element: <Posts />,
      },
      {
        path: "scroll-to-bottom",
        element: <ScrollToBottom />,
      },
      {
        path: "darkmode",
        element: <DarkMode />,
      },
      {
        path: "debounce",
        element: <Debounce />,
      },
      {
        path: "fullPage-scroll",
        element: <FullPageScroll />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
