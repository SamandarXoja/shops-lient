import { ChevronRight } from 'lucide-react';
import brandImg from '../assets/images/brand.png'

function Brands() {
    return (
        <div className="container">
            <div className='flex justify-between items-center mt-20'>
                <h3 className='text-[#2F323A] 2xl:text-[34px]  xl:text-[34px]  lg:text-[34px]  md:text-[34px]  sm:text-[34px]  xs:text-[20px]  font-semibold'>Популярные бренды</h3>
                <a href="#" className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden items-center justify-center  max-w-[174px] w-full py-3 border border-[#D1D1D3]'>
                    <span className='text-lg'>Все бренды</span>
                    <ChevronRight color='#454950' />
                </a>
            </div>
            <div className='flex flex-wrap 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 sm:gap-4 xs:gap-2  justify-center mt-[18px]'>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
                <div className='border'>
                    <img className='2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[124px] xs:h-[68px] 2xl:w-[179px] xl:w-[179px] lg:w-[179px] md:w-[179px] sm:w-[179px] xs:w-[100px] object-cover' src={brandImg} alt="" />
                </div>
               
                

            </div>
            <a href="#" className='mt-4 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex items-end justify-center mx-auto max-w-[316px] w-full py-3 border border-[#D1D1D3]'>
                <span className='text-lg'>Все бренды</span>
                <ChevronRight color='#454950' />
            </a>
        </div>
    )
}

export default Brands
