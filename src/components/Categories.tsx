import { ChevronRight } from 'lucide-react';
import bath from '../assets/images/dush.png'


function Categories() {
    return (
        <div className="container ">
            <div className="flex justify-between items-center mt-20">
                <h3 className='text-[34px] text-[#2F323A] font-semibold'>Категории</h3>
                <a href="#" className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden max-w-[160px] w-full py-3 border justify-center'>
                    <span className='text-[#171B24]'>Все акции</span>
                    <ChevronRight />
                </a>
            </div>
            <div className='flex gap-4 justify-center flex-wrap mt-4'>

                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
                <div className='2xl:w-[180px] xl:w-[180px] lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[148px] 2xl:h-[180px] xl:h-[180px] lg:h-[180px] md:h-[180px] sm:h-[180px] xs:h-[148px] bg-[#F6F6F6] mb-4 overflow-hidden'>
                    <p className='text-center mt-[12px] mb-4 text-lg'>Душевые</p>
                    <img src={bath} alt="" />
                </div>
              
            </div>
            <a href="#" className='2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex  mx-auto min-h-[48px] max-w-[316px] w-full py-3 border justify-center'>
                <span className='text-[#171B24]'>Все акции</span>
                <ChevronRight />
            </a>


        </div>
    )
}

export default Categories
