import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';



const tutors = [
  {
    name: 'Hamza Ashfaq',
    city: 'Tokyo',
    image: '1.jpg',
    languages: 'English, Chinese, Japanese…',
    trialPrice: '¥1000',
    oneOnOnePrice: '¥3000',
  },
  {
    name: 'Kashif Zia',
    city: 'Tokyo',
    image: '2.jpg',
    languages: 'English, Chinese, Japanese…',
    trialPrice: '¥1000',
    oneOnOnePrice: '¥3000',
  },
  {
    name: 'Hira Ijaz',
    city: 'Tokyo',
    image: '1.jpg',
    languages: 'English, Chinese, Japanese…',
    trialPrice: '¥1000',
    oneOnOnePrice: '¥3000',
  },
  {
    name: 'Bushra Riaz',
    city: 'Tokyo',
    image: '2.jpg',
    languages: 'English, Chinese, Japanese…',
    trialPrice: '¥1000',
    oneOnOnePrice: '¥3000',
  },
  {
    name: 'Hira Ijaz',
    city: 'Tokyo',
    image: '1.jpg',
    languages: 'English, Chinese, Japanese…',
    trialPrice: '¥1000',
    oneOnOnePrice: '¥3000',
  },
   {
    name: 'Kashif Zia',
    city: 'Tokyo',
    image: '2.jpg',
    languages: 'English, Chinese, Japanese…',
    trialPrice: '¥1000',
    oneOnOnePrice: '¥3000',
  },
];

const TutorCard = ({ tutor }) => (
  <Card
    className="!w-[268.8px] !h-[436px] rounded-[10px] overflow-hidden border border-gray-200 shadow flex flex-col"
    cover={
      <img
        alt={tutor.name}
        src={tutor.image}
        className="w-[268.8px] h-[170px] object-cover rounded-t-[10px]"
      />
    }
    bodyStyle={{ padding: 0, flex: 1, display: 'flex', flexDirection: 'column' }}
  >
    <div className="w-[248px] h-full mx-auto pt-[10px] px-[10px] flex flex-col gap-[4px] ">
      <p className="text-[#1A56DB] font-semibold text-[20px]">{tutor.name}</p>
      <p className="text-[#B1B1B1] text-[16px]">{tutor.city}</p>
      <div className="border border-[#F7F7F7]" />
      <div>
        <p className="text-[#717171] font-semibold text-[14px]">Language:</p>
        <p className="text-[#B1B1B1] text-[14px]">{tutor.languages}</p>
      </div>
      <div className="border border-[#F7F7F7]" />
      <div>
        <p className="text-[#717171] font-semibold text-[14px]">Fee Structure:</p>
        <p className="text-[#B1B1B1] text-[14px]">Trial Lesson: {tutor.trialPrice}</p>
        <p className="text-[#B1B1B1] text-[14px]">One-on-one: {tutor.oneOnOnePrice}</p>
      </div>
      <div className="flex-grow" />
    </div>

   <Button
  type="primary"
  className="!w-full !h-[44px] !bg-blue-500 hover:!bg-blue-600 text-white 
             !rounded-none !px-[60px] !py-[10px] 
             flex items-center justify-center gap-[16px] border-none shadow-none"
>
  <img src="shopping-bag1.svg" alt="cart" className="w-6 h-6" />
  Add to Cart
</Button>


  </Card>
);

const TutorsSection = () => (
  <div className="py-[60px] bg-white">
    <div className="max-w-[1440px] mx-auto">
      <div className="mb-12 max-w-[1090px] pl-[60px]">
        <h2 className="text-[48px] font-extrabold leading-snug ">
          Meet the most qualified <span className="text-blue-500">Tutors.</span>
        </h2>
        <p className="text-gray-500 font-normal text-[20px]">
          Delve into the rich expertise and enthusiasm of our newest mentorship team members.
          Whether they're experienced experts or up-and-coming talents, our team is committed to
          supporting and empowering learners on their path to success.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2} 
        breakpoints={{
            640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {tutors.map((tutor, index) => (
          <SwiperSlide key={index}>
            <TutorCard tutor={tutor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default TutorsSection;
