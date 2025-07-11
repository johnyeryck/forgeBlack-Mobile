import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Buypage from "../pages/Buypage"

const router = createBrowserRouter([
  {
    path : "/produto/:slug/:id",
    element : <Buypage />
  },
  {
    path : "/",
    element : <App />
  }
])
export default router