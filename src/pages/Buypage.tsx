import { useContext } from "react";
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { MyContext } from "../context/contextApp";
function Buypage(){
    const { slug } = useParams();
    const slugcomp = slug?.replace(/-/g,"")
    const data = useContext(MyContext)
    return(
        <header>
            <Navbar />
            {
               data && data.length > 0 ? (
                    data.map((P)=>(
                        P.nome === slugcomp ? (
                            <div className="border">
                                <img src={P.img} alt="" />
                            </div>
                        ): null
                    ))
               ): null
            }
        </header>
    )
}

export default Buypage