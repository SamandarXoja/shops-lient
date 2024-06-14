import { AlignJustify, Box, Search, ShoppingCart, UserRound } from "lucide-react"
import logo from '../assets/icons/Logo.svg';


function Navbar() {



  return (
    <nav className="relative ">
      <div className="bg-white pb-[10px]">
        <div className={`container flex items-end justify-between flex-wrap   `}>
          <a href="#" className="block mt-[16px]">
            <img src={logo} alt="logo" />
          </a>
          <div className="flex gap-4">

            <button className="flex  bg-[#FCEC41] justify-center gap-2 items-center h-[48px] 2xl:w-[144px] xl:w-[144px] lg:w-[144px] md:w-[144px] sm:w-[144px] xs:w-[100px] py-[12px]">
              <AlignJustify size={24} color="#2F323A" />
              <span className="text-[#171B24] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[13px]">Каталог</span>
            </button>

            <div className="2xl:flex xl:flex lg:flex sm:hidden xs:hidden 2xl:w-[444px] xl:w-[444px] lg:w-[444px] md:hidden flex items-center bg-[#F6F6F6] px-[16px] border-b h-[48px] ">
              <input type="text" placeholder="Поиск" className="w-full bg-[#F6F6F6] border-none outline-none" />
              <Search size={24} />
            </div>

            <div className="flex gap-[10px] 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden">
              <a href="#" className="flex flex-col items-center">
                <UserRound color="#5D6066" size={24} />
                <span className="text-[#454950] text-[15px]">Профиль</span>
              </a>
              <a href="#" className="flex flex-col items-center">
                <Box color="#5D6066" size={24} />
                <span className="text-[#454950] text-[15px]">Заказы</span>
              </a>
              <a href="#" className="flex flex-col items-center">
                <ShoppingCart color="#5D6066" size={24} />
                <span className="text-[#454950] text-[15px]">Корзина</span>
              </a>
            </div>

          </div>
          <div className="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex 2xl:w-[444px] mt-3 xl:w-[444px] lg:w-[444px] md:w-[100%] sm:w-[100%] xs:w-[100%] flex items-center bg-[#F6F6F6] px-[16px] border-b h-[48px] ">
            <input type="text" placeholder="Поиск" className="w-full bg-[#F6F6F6] border-none outline-none" />
            <Search size={24} />
          </div>
        </div>
      </div>
      <div className="flex bg-white pt-2 w-full justify-around flex-row gap-[10px] fixed bottom-0 2xl:hidden xl:hidden lg:hidden md:hidden sm: xs:flex">
        <a href="#" className="flex flex-col items-center">
          <UserRound color="#5D6066" size={24} />
          <span className="text-[#454950] text-[15px]">Профиль</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <Box color="#5D6066" size={24} />
          <span className="text-[#454950] text-[15px]">Заказы</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <ShoppingCart color="#5D6066" size={24} />
          <span className="text-[#454950] text-[15px]">Корзина</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
