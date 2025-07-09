import { QueryClient, useQuery, } from '@tanstack/react-query';
import Navbar from './components/Navbar.tsx'
import Layout from './components/Layout.tsx';
import { MyContext } from './context/contextApp';
import Promo from './components/Promo.tsx';
import Navegar from './components/navegar.tsx';
import Footer from './components/footer.tsx';
function App() {

const { data } = useQuery({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/produtos", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });
console.log(data)
  return (
      <>
      <MyContext.Provider value={data}>
          <Navbar />
          <Layout />
          <Navegar />
          <Promo />
          <Footer />
      </MyContext.Provider>
      </>
  )
}

export default App
