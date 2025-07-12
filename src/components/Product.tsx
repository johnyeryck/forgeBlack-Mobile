import { Link } from "react-router-dom"
interface Productinterface {
    id : number,
    valor : number,
    nome : string,
    img : string,
    value_anterior?: string
}


function slugify(texto : string) {
  return texto
    .toLowerCase()
    .normalize('NFD')                   // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, '')    // remove os acentos
    .replace(/[^\w\s-]/g, '')           // remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-')               // troca espaços por hífens
    .replace(/-+/g, '-');               // evita hífens duplicados
}


const Product : React.FC<Productinterface> = ({img , nome , valor , value_anterior,id})=>{
    return(
        <article className=" rounded-lg h-auto w-41" key={id}>
            <Link to={`/produto/${slugify(nome)}/${id}`}>
            <img src={img} alt={`Imagem de ${nome}`} className="rounded-xl ml-auto mr-auto" />
            <div className="rounded-lg">
                <div className="h-18">
                        <h3 className="font-light pl-1 text-white ">{nome.length > 25 ? nome.slice(0,20) + "..." : nome}</h3>
                </div>
                <div className="flex pt-2 w-[80%] mt-2">
                    <p className="text-green-400 font-bold ">R${valor}</p>
                    {value_anterior && (
                        <p className="line-through pl-2 text-sm">R${value_anterior}</p>
                    )}
                </div>
            </div>
                    </Link>
        </article>
    )
}

export default Product