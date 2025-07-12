import { useQuery } from "@tanstack/react-query";
import { MyContext } from "./context/contextApp";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function Wrapper(){
    const { data } = useQuery({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await fetch("https://bf-backendservice.onrender.com/produtos", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });
    return(
        <MyContext value={data}>
            <RouterProvider router={router}/>
        </MyContext>
    )
}

export default Wrapper