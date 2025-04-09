import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/style.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebDevelopement from "./views/WebDevelopement.jsx";
import DigitalMarketing from "./views/DigitalMarketing.jsx";
import ContentCreation from "./views/ContentCreation.jsx";
import FilmPromotion from "./views/FilmPromotion.jsx";
import Index from "./views/Index.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";
import Service from "./views/Service.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/services/web_developement",
        element: <WebDevelopement />,
      },
      {
        path: "/services/digital_marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/services/content_creation",
        element: <ContentCreation />,
      },
      {
        path: "/services/film_promotion",
        element: <FilmPromotion />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
