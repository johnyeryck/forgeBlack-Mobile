import { useContext } from "react"
import { MyContext } from "../context/contextApp.tsx"
import Product from "./Product.tsx"
function Promo(){
    const data = useContext(MyContext)
    interface PR {
        nome: string
    }
    const promo : PR[]= [
        {nome : "Creatina Max Titanium 300g"},
        {nome : "Creatina Monohidratada Bodyaction 300g"}

    ]
    return(
        <>
       <header className="mt-20  text-white ml-auto mr-auto" >
        <h1 className="font-bold  pl-6 text-white">Promoções</h1>
        <div className="flex justify-evenly">
                {
                    data && data.length > 0? (
                        data.map((p)=>(
                            promo.find((item)=> item.nome == p.nome ) ? (
                                <Product  key={p.id} img={p.img} valor={p.valor} id={p.id} nome={p.nome} value_anterior={p.value_anterior}/>
                            ): null
                        ))
                        
                    ): null
                }
        </div>
       </header> 
        </>
    )
}
export default Promo