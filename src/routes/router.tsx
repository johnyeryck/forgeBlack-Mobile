import  { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const Buypage = lazy(() => import("../pages/Buypage"));

const router = createBrowserRouter([
  {
    path: "/produto/:slug/:id",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <Buypage />
      </Suspense>
    )
  },
  {
    path: "/",
    element: (
        <App />
    )
  }
]);

export default router;
