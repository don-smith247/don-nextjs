import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {FreeMode, Pagination} from 'swiper';

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return(
    <Swiper breakpoints={{
      320:{
        slidesPerView: 1,
        spaceBetween: 15
      },
      640:{
        slidesPerView: 2,
        spaceBetween: 15
      },
  
      
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className=' h-[240px] sm:h-[340px] '
    >
      {
        serviceData.map((item, index)=>{
          return (
            <SwiperSlide key={index}>
            <div className=' flex bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(92,64,187,0.15)] 
            transition-all duration-300'>
              <div className=' text-4xl text-accent '>{item.icon}</div>
              <div className=' mb-8'>
                <div className=' mb-2 text-lg'>{item.title}</div>
                <p className=' max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <div className=' text-3xl'>
                <RxArrowTopRight className=' group-hover:rotate-45 group-hover:text-accent transition-all duration-300  '/>
              </div>
            </div>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
