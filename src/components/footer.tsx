import Instagram from '../assets/instagram.png'
import Whats from '../assets/whatsapp.png'
function Footer (){
    return(
        <footer className="w-full h-50 mt-40 text-white flex justify-evenly ">
            <div className="size-35">
                <h3 className="text-2xl">Black Forge</h3>
                <p className="font-light">Suplementos e Performance com sua identidade.</p>
            </div>
            <article className="">
                <p className="text-2xl">Links</p>
                <div className="flex flex-col">
                    <a href="">Contato</a>
                    <a href="">forgeblack6@gmail.com</a>
                    <a href="">Política de Privacidade</a>
                 <div className='flex'>
                     <img src={Instagram} alt="" className='size-7 mt-4 ' />
                     <a href="https://api.whatsapp.com/send/?phone=83999246257&text&type=phone_number&app_absent=0">
                     <img src={Whats} alt="" className='size-7 mt-4 ml-2' />
                     </a>
                     
                 </div>
                </div>

            </article>
        </footer>
    )
}

export default Footer