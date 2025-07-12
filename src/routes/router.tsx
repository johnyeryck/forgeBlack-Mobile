import  { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("../App"));
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
      <Suspense fallback={<div>Carregando...</div>}>
        <App />
      </Suspense>
    )
  }
]);

export default router;
