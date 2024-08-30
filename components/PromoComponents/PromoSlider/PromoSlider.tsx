import styles from './PromoSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { PromoSlide } from '../PromoSlide/PromoSlide';
import { useSetup } from '../../../hooks/useSetup';


export const PromoSlider = (): JSX.Element => {
    const { promo } = useSetup();

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
                promo.map(p => (
                    <SwiperSlide key={p.promo_id}>
                        <PromoSlide photo={p.photo_url} url={p.redirect_url} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

