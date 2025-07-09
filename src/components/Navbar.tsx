import logo from '../assets/logo.jpeg'

function Navbar (){
    return (
        <nav className='bg-black h-20 fixed z-10 left-0 top-0  w-full flex'>
          <img src={logo} alt="" className='size-auto mt-2 ml-auto mr-auto rounded-lg '/>
      </nav>
    )
}

export default Navbar