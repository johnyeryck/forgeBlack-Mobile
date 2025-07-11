import { createContext } from "react";
interface produtos {
    id: number,
    nome : string
    valor : number
    img: string,
    value_anterior : string
    description : string
}

export const MyContext = createContext<produtos[] | undefined>(undefined)