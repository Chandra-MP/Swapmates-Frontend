import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Pop1 from '../images/popular1.jpg'   
import Pop2 from '../images/popular2.jpg'
import Pop3 from '../images/popular3.jpg'
import Pop4 from '../images/popular4.jpg'
import Pop5 from '../images/popular5.jpg'

const swiper_corousel = () => {
    return (
        <div className='swipe'>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{clickable:true}}
                scrollbar = {{draggable:true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide> <article className="popular__card swiper-slide">
                    <img src={Pop1} alt="" className="popular__img" />

                    <div className="popular__price">
                        <h2 className="popular__price">
                            <span>$</span>66,356
                        </h2>
                        <h3 className="popular__title">
                            Garden City Asset
                        </h3>
                        <p className="popular__description">
                            Street The Gardern City of Miraflores,
                            Lima - Peru Av. Sol #9876
                        </p>
                    </div>
                </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="popular__card swiper-slide">
                        <img src={Pop2} alt="" className="popular__img" />

                        <div className="popular__price">
                            <h2 className="popular__price">
                                <span>$</span>35,230
                            </h2>
                            <h3 className="popular__title">
                                Gables Luxurious House
                            </h3>
                            <p className="popular__description">
                                Street The Gardern City of Miraflores,
                                Lima - Peru Av. Sol #9876
                            </p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="popular__card swiper-slide">
                        <img src={Pop3} alt="" className="popular__img" />

                        <div className="popular__price">
                            <h2 className="popular__price">
                                <span>$</span>74,199
                            </h2>
                            <h3 className="popular__title">
                                Garden Orchard City
                            </h3>
                            <p className="popular__description">
                                Street The Gardern City of Miraflores,
                                Lima - Peru Av. Sol #9876
                            </p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="popular__card swiper-slide">
                        <img src={Pop4} alt="" className="popular__img" />

                        <div className="popular__price">
                            <h2 className="popular__price">
                                <span>$</span>58,110
                            </h2>
                            <h3 className="popular__title">
                                Luxurious City Garden
                            </h3>
                            <p className="popular__description">
                                Street The Gardern City of Miraflores,
                                Lima - Peru Av. Sol #9876
                            </p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="popular__card swiper-slide">
                                <img src={Pop5} alt="" className="popular__img" />

                                <div className="popular__price">
                                    <h2 className="popular__price">
                                        <span>$</span>62,500
                                    </h2>
                                    <h3 className="popular__title">
                                        Aliva Private Garden
                                    </h3>
                                    <p className="popular__description">
                                        Street The Gardern City of Miraflores,
                                        Lima - Peru Av. Sol #9876
                                    </p>
                                </div>
                            </article>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default swiper_corousel;