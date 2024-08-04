import styles from './PromoSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { PromoSlide } from '../PromoSlide/PromoSlide';


export const PromoSlider = (): JSX.Element => {
    const titles = ['promo1', 'promo2', 'promo3'];

    return (
        <Swiper className={styles.promoSLider}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            loop={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
                titles.map(t => (
                    <SwiperSlide key={t}>
                        <PromoSlide title={t} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

