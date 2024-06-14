import { useRef } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import avatar from '../assets/icons/Avatars.svg'

export default function Feedbacks() {


    const swiperRef = useRef<any>(null);

    return (
        <div className='bg-[#F6F6F6] pt-[80px] pb-[80px] mt-20 mb-[40px]'>
            <div className='flex justify-between container'>
                <h3 className='text-[34px] font-semibold'>Отзывы</h3>
                <div className='flex gap-3'>
                    <button className='bg-white border flex justify-center items-center w-[52px] h-[52px]' type='button' onClick={() => swiperRef.current.slidePrev()}>
                        <ArrowLeft />
                    </button>
                    <button className='border bg-white flex justify-center items-center w-[52px] h-[52px]' type='button' onClick={() => swiperRef.current.slideNext()}>
                        <ArrowRight />
                    </button>
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}

                spaceBetween={16}
                grabCursor={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={
                    {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50
                        }
                    }
                }

                modules={[Navigation, Pagination, A11y]}
                className="mySwiper mt-[16px]"
            >


                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='max-w-[376px] w-full p-[24px] bg-white'>
                        <div className='flex items-center gap-3'>
                            <img src={avatar} alt="" />
                            <b>Пётр</b>
                        </div>
                        <p className='mt-3 text-[#2F323A] leading-[150%]'>Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽</p>
                        <p className='mt-[15px] text-[#8B8D92] font-medium'>21 марта 2022 г.</p>
                    </div>

                </SwiperSlide>





            </Swiper>


        </div>
    );
}
