import { useContext } from "react"
import { MyContext } from "../context/contextApp"
import Product from "./Product"
import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

function Navegar (){
    const data = useContext(MyContext)
    return(
        <section className="mt-20">
            <h1 className="text-white font-bold pl-2">Navegar</h1>
            <Swiper
            slidesPerView={3}
            modules={[Navigation, Pagination ,Autoplay]}
            loop={true}
            className="w-full"
            autoplay={
                { 
                delay: 5000,
                }
                }
            >
                {
                    data && data.length > 0 ? (
                         data.map((p)=>(
                        <SwiperSlide>
                            <div className="flex border">
                                <Product img={p.img} valor={p.valor} id={p.id} nome={p.nome} key={p.id}/>
                            </div>
                        </SwiperSlide>
                         ))
                    ):null
                }
            </Swiper>
        </section>
    )
}

export default Navegar