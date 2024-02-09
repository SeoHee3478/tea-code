import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import InfiniteScroll from "./pages/InfiniteScroll";
import Sort from "./pages/Sort";
import Posts from "./Pages/Pagination"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
