import { MapPin } from 'lucide-react'


function Headerinfo() {
    return (
        <div className="bg-[#F6F6F6] py-[10px] 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden">
            <div className="container flex justify-between items-center ">
                <div className="flex gap-2">
                    <MapPin color="#5D6066" size={20} />
                    <span className="text-[#5D6066] text-[15px]">Москва</span>
                </div>

                <ul className="flex gap-6">
                    <li><a href="#" className="text-[#5D6066] text-[15px]">Бренды</a></li>
                    <li><a href="#" className="text-[#5D6066] text-[15px]">Доставка</a></li>
                    <li><a href="#" className="text-[#5D6066] text-[15px]">Возврат</a></li>
                    <li><a href="#" className="text-[#5D6066] text-[15px]">Документация</a></li>
                    <li><a href="#" className="text-[#5D6066] text-[15px]">Контакты</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Headerinfo
