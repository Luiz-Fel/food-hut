import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SocialItem from './SocialItem';
import styles from './styles.module.scss'
import profileImage1 from '../../../public/images/profileImage1.png'
import socialImage1 from '../../../public/images/socialImage1.png'

export default function Social() {
  return (
    <div className={styles.container}>
        <div className={styles.titleSection}>
            <h2>Follow us on Instagram</h2>
            <p>
                For the latest news, updates and inspirational recipes, 
                follow us on Instagram to flavour up your food!
            </p>
            <div className={styles.socialItems}>
            <Swiper
            spaceBetween={250}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <SocialItem 
                    profileImg={profileImage1} 
                    imageSrc={socialImage1} 
                    profileName={'Clara Hood'} 
                    text={'lorem ipsum dolor sit amet, consectetur adipisicing'} 
                    username={'@clarahood'} 
                    likes={'356'} 
                    comments={'43'} /
                    >
                </SwiperSlide>
                <SwiperSlide>
                    <SocialItem 
                    profileImg={profileImage1} 
                    imageSrc={socialImage1} 
                    profileName={'Clara Hood'} 
                    text={'lorem ipsum dolor sit amet, consectetur adipisicing'} 
                    username={'@clarahood'} 
                    likes={'356'} 
                    comments={'43'} /
                    >
                </SwiperSlide>
                <SwiperSlide>
                    <SocialItem 
                    profileImg={profileImage1} 
                    imageSrc={socialImage1} 
                    profileName={'Clara Hood'} 
                    text={'lorem ipsum dolor sit amet, consectetur adipisicing'} 
                    username={'@clarahood'} 
                    likes={'356'} 
                    comments={'43'} /
                    >
                </SwiperSlide>
                <SwiperSlide>
                    <SocialItem 
                    profileImg={profileImage1} 
                    imageSrc={socialImage1} 
                    profileName={'Clara Hood'} 
                    text={'lorem ipsum dolor sit amet, consectetur adipisicing'} 
                    username={'@clarahood'} 
                    likes={'356'} 
                    comments={'43'} /
                    >
                </SwiperSlide>
                <SwiperSlide>
                    <SocialItem 
                    profileImg={profileImage1} 
                    imageSrc={socialImage1} 
                    profileName={'Clara Hood'} 
                    text={'lorem ipsum dolor sit amet, consectetur adipisicing'} 
                    username={'@clarahood'} 
                    likes={'356'} 
                    comments={'43'} /
                    >
                </SwiperSlide>
                
    </Swiper>
            </div>
        </div>
    </div>
  )
}
