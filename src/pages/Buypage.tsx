import { useContext } from "react";
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { MyContext } from "../context/contextApp";
import {FaWhatsapp} from 'react-icons/fa'
function Buypage(){
    const data = useContext(MyContext)
    const { slug } = useParams();
    const slugcomp = slug?.replace(/-/g," ")
    return(
        <>
        <main>
            <Navbar />
            {
                data && data.length > 0 ? (
                    data.map((P)=>(
                        P.nome === slugcomp ? (
                            <section className="border mt-40 ">
                                <img src={P.img} alt="" className="ml-auto mr-auto rounded-lg size-[80%]"/>
                                <div className="border w-[80%] ml-auto mr-auto">
                                    <p className="text-green-500  text-2xl ">R${P.valor}</p>
                                    <p className="text-white ">{P.nome}</p>
                                </div>
                                <div className="w-[80%] ml-auto mr-auto h-10 mb-10 mt-2">
                                    <button className="bg-green-500 size-full rounded-lg ">
                                        <div className="text-white w-[60%]  ml-auto mr-auto inline-flex">
                                                <FaWhatsapp className="size-5 pr-1"/>
                                            Falar com Vendedor
                                        </div>
                                    </button>
                                </div>
                                <div className="border border-amber-300 w-[80%] size-auto text-white ml-auto mr-auto">
                                    <h3 className="text-2xl">Descrição</h3>
                                </div>
                            </section>
                            
                        ): null
                    ))
                ): null
            }
        </main>
        </>
    )
}

export default Buypage