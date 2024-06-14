import footerLogo from '../assets/icons/Logo2.svg'
import { Mail, MapPin } from 'lucide-react';
import visa from '../assets/icons/Visa.svg'
import master from '../assets/icons/master.svg'
import mir from '../assets/icons/mir.svg'

function Footer() {
    return (
        <>
            <footer className="footer-1 pb-5 pt-10 bg-[#2F323A] 2xl:block xl:block lg:block md:block sm:block xs:hidden">
                <div className="container flex items-center  justify-between">
                    <div>
                        <a href="#" className='block'>
                            <img src={footerLogo} alt="" />
                        </a>
                        <a href="#" className='flex gap-2 mt-[22px]'>
                            <Mail color='#E8E9EA' />
                            <span className='text-[#E8E9EA] font-medium'>info@stroykastore.ru</span>
                        </a>
                        <a href="#" className='flex gap-2 mt-[16px]'>
                            <MapPin color='#E8E9EA' />
                            <span className='text-[#E8E9EA] font-medium'>Москва, ул. Камушкина 10</span>
                        </a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Личный кабинет</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Заказы</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Избранное</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Корзина</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Каталог</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Акции</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Бренды</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Контакты</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Стать продавцом</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Доставка</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Возврат</a>
                        <a href="#" className='text-[#E8E9EA] font-medium'>Документация</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='container border-t border-[#5D6066]'></div>
                    <div className='flex justify-between container'>
                        <p className='mt-4 text-[#D1D1D3]'>© СтройкаСтор</p>

                        <div className='flex mt-4 gap-4'>
                            <img src={visa} alt="" />
                            <img src={master} alt="" />
                            <img src={master} alt="" />
                            <img src={mir} alt="" />
                        </div>

                        <p className='mt-4 text-[#D1D1D3]'>Cделал Самандар</p>
                    </div>


                </div>


            </footer>

            <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block bg-[#2F323A] pb-[30px] pt-[30px] footer-2 mb-[50px]'>
                <div className='container'>
                    <a href="#" className='block'>
                        <img src={footerLogo} alt="" />
                    </a>
                    <a href="#" className='flex gap-2 mt-[22px]'>
                        <Mail color='#E8E9EA' />
                        <span className='text-[#E8E9EA] font-medium'>info@stroykastore.ru</span>
                    </a>
                    <a href="#" className='flex gap-2 mt-[16px]'>
                        <MapPin color='#E8E9EA' />
                        <span className='text-[#E8E9EA] font-medium'>Москва, ул. Камушкина 10</span>
                    </a>
                </div>

                <div className='mt-5 mb-5'>
                    <div className='container border-t border-[#5D6066]'></div>
                </div>

                <div className='container flex justify-between '>
                    <ul className='flex flex-col gap-[10px]'>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Личный кабинет</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Заказы</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Избранное</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Корзина</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Каталог</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Акции</a></li>
                    </ul>
                    <ul className='flex flex-col gap-[10px]'>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Бренды</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Контакты</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Стать продавцом</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Доставка</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Возврат</a></li>
                        <li><a href="#" className='text-[#E8E9EA] text-[15px]'>Документация</a></li>
                    </ul>

                </div>
                <div className='mt-5 mb-5'>
                    <div className='container border-t border-[#5D6066]'></div>
                </div>



                <div className="container">
                    <div className='flex mt-4 gap-4'>
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                        <img src={master} alt="" />
                        <img src={mir} alt="" />
                    </div>
                    <p className='text-[#D1D1D3] mt-[10px]'>Cделал Самандар</p>
                </div>

            </div>
        </>
    )
}

export default Footer
