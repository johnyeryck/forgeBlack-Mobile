import { useContext } from "react";
import Navbar from "../components/Navbar"
import { Link, useParams } from "react-router-dom"
import { MyContext } from "../context/contextApp";
import {FaWhatsapp} from 'react-icons/fa'
import {GoArrowLeft} from 'react-icons/go'
function Buypage(){
    const data = useContext(MyContext)
    const { id } = useParams();
    console.log(data)

    return(
        <>
        <main>
            <Navbar />
            {
                data && data.length > 0 ? (
                    data.map((P)=>(
                        P.id === Number(id) ? (
                            <section className=" mt-20 mb-20" key={P.id}>
                                <Link to={"/"}>
                                <GoArrowLeft className="size-12 mt-10 rounded-full  bg-green-500 ml-7 mb-10" />
                                </Link>
                                <img src={P.img} alt="" className="ml-auto mr-auto rounded-lg size-[80%]"/>
                                <div className=" w-[80%] ml-auto mr-auto mt-2">
                                    <p className="text-green-500  text-2xl ">R${P.valor}</p>
                                    <p className="text-white ">{P.nome}</p>
                                </div>
                                <div className="w-[80%] ml-auto mr-auto h-10 mb-10 mt-2">
                                    <button className="bg-green-500 size-full rounded-lg ">
                                        <div className="text-white w-auto ml-auto mr-auto inline-flex">
                                                <FaWhatsapp className="size-5 pr-1 ml-auto "/>
                                                 <p className="mr-auto">Fale Conosco</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[80%] size-auto text-white ml-auto mr-auto ">
                                    <h3 className="text-2xl mb-3">Descrição:</h3>
                                    {   P.description && (
                                        P.description.split('\n').map((line)=>(
                                            <p className="text-white py-2">{line}</p>
                                        ))
                                    )
                                    }
                                </div>
                            </section>
                            
                        ): null
                    ))
                ): <h1 className="text-white text-center mt-50">Produto Não encontrado</h1>
            }
        </main>
        </>
    )
}

export default Buypage