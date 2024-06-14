import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';


import { ArrowRight, ArrowLeft } from 'lucide-react';

import heroImg from "../assets/images/hero.png"
import heroImg2 from "../assets/images/hero2.png"
import { useRef } from 'react';


function Hero() {

    const swiperRef = useRef<any>(null);


    return (
        <div className='2xl:min-h-[420px] xl:min-h-[420px] lg:min-h-[420px] md:min-h-[420px] sm:min-h-[420px] xs:min-h-[206px] relative-container max-w-[1360px] w-full  mx-auto  2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-10 sm:mt-10 xs:mt-4'>
            <Swiper
                // navigation={true} modules={[Navigation]} 
                modules={[Navigation, Pagination, A11y]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="mySwiper ">
                <SwiperSlide>
                    <div className='slide-content flex  flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between xs:justify-start 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] xs:2xl:h-auto 2xl:pt-[40px] xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] xs:pt-[20px] 2xl:pb-[40px] xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] xs:pb-[20px]  2xl:pl-[100px] xl:pl-[100px] lg:pl-[100px] md:pl-[100px] sm:pl-[100px] xs:pl-[20px]'>
                        <div>
                            <h1 className='2xl:max-w-[575px] xl:max-w-[575px] lg:max-w-[575px] md:max-w-[575px] sm:max-w-[575px] xs:max-w-[212px] w-full font-bold leading-[120%] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[48px] xs:text-[26px]'>Специальные предложения</h1>
                            <p className='2xl:max-w-[278px] xl:max-w-[278px] lg:max-w-[278px] md:max-w-[278px] sm:max-w-[278px] xs:max-w-[186px]  w-full 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[13px] text-[#454950] 2xl:mt-[20px] xl:mt-[20px] lg:mt-[20px] md:mt-[20px] sm:mt-[20px] xs:mt-[4px]'>на строительные материалы и товары для ремонта</p>
                        </div>
                        <a href="#" className='2xl:mt-[0px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[0px] xs:mt-[10px] block 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-[15px] text-[#171B24] 2xl:max-w-[147px] xl:max-w-[147px] lg:max-w-[147px] md:max-w-[147px] sm:max-w-[147px] xs:max-w-[131px] w-full bg-[#FCEC41] py-[12px] text-center'>
                            Подробнее
                        </a>
                    </div>
                    <img src={heroImg} alt="" className='object-cover 2xl:min-h-[420px] xl:min-h-[420px] lg:min-h-[420px] md:min-h-[420px] sm:min-h-[420px] xs:min-h-[206px] swiper-slide-image max-w-[1360px] w-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content flex  flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between xs:justify-start 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] xs:2xl:h-auto 2xl:pt-[40px] xl:pt-[40px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px] xs:pt-[20px] 2xl:pb-[40px] xl:pb-[40px] lg:pb-[40px] md:pb-[40px] sm:pb-[40px] xs:pb-[20px]  2xl:pl-[100px] xl:pl-[100px] lg:pl-[100px] md:pl-[100px] sm:pl-[100px] xs:pl-[20px]'>
                        <div>
                            <h1 className='max-w-[575px] w-full font-bold leading-[120%] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[48px] xs:text-[26px] '>Распродажа инструментов</h1>
                            <p className='2xl:max-w-[278px] xl:max-w-[278px] lg:max-w-[278px] md:max-w-[278px] sm:max-w-[278px] xs:max-w-[186px]  w-full 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[13px] text-[#454950] 2xl:mt-[20px] xl:mt-[20px] lg:mt-[20px] md:mt-[20px] sm:mt-[20px] xs:mt-[4px]'>«СтройкаСтор» стремится сделать условия покупки максимально выгодными.</p>
                        </div>
                        <a href="#" className='2xl:mt-[0px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[0px] xs:mt-[10px] block 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-[15px] text-[#171B24] 2xl:max-w-[147px] xl:max-w-[147px] lg:max-w-[147px] md:max-w-[147px] sm:max-w-[147px] xs:max-w-[131px] w-full bg-[#FCEC41] py-[12px] text-center'>
                            Подробнее
                        </a>
                    </div>
                    <img src={heroImg2} alt="" className='object-cover 2xl:min-h-[420px] xl:min-h-[420px] lg:min-h-[420px] md:min-h-[420px] sm:min-h-[420px] xs:min-h-[206px] swiper-slide-image max-w-[1360px] w-full' />
                </SwiperSlide>

                <div className='flex gap-3 button-container 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden'>
                    <button className='prev-btn' onClick={() => swiperRef.current.slidePrev()}>
                        <ArrowLeft />
                    </button>
                    <button className='next-btn' onClick={() => swiperRef.current.slideNext()}>
                        <ArrowRight />
                    </button>
                </div>

            </Swiper>

        </div>
    )
}

export default Hero
