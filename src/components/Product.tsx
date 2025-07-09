interface Productinterface {
    id : number,
    valor : number,
    nome : string,
    img : string,
    value_anterior?: string
}

const Product : React.FC<Productinterface> = ({img , nome , valor , value_anterior})=>{
    return(
        <article className="border-b rounded-lg h-auto w-41">
            <img src={img} alt={`Imagem de ${nome}`} className="rounded-xl ml-auto mr-auto" />
            <div className="rounded-lg ">
                <div className="h-18">
                    <h3 className="font-light pl-1 text-white">{nome}</h3>
                </div>
                <div className="flex pt-2 ">
                    <p className="text-green-400 font-bold pl-2">R${valor}</p>
                    {value_anterior && (
                        <p className="line-through pl-2">R${value_anterior}</p>
                    )}
                </div>
            </div>
        </article>
    )
}

export default Product