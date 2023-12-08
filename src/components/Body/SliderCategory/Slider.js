import React, { useRef, useState } from "react";
import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import image1 from "./imgSliderCat/m1.png";
import image2 from "./imgSliderCat/m2.png";
import image3 from "./imgSliderCat/m3.png";
import image4 from "./imgSliderCat/m4.png";

import image5 from "./imgSliderCat/m5.png";
import image6 from "./imgSliderCat/m6.png";
import image7 from "./imgSliderCat/m7.png";
import image8 from "./imgSliderCat/m8.png";
import image9 from "./imgSliderCat/m9.png";
import image10 from "./imgSliderCat/m10.png";
import image11 from "./imgSliderCat/m11.png";

function Slider({ targetSection1,targetSection2, targetSection3, targetSection4, targetSection5, targetSection6, targetSection7, targetSection8, targetSection9, targetSection10, targetSection11}) {

    const sliderItem =[

        {targetSection:targetSection1,
         imageSlider:image1,
         tittleSLider:"GASEOSAS"
        },

        {targetSection:targetSection2,
        imageSlider:image2,
        tittleSLider:"JUGOS"
        },

       {targetSection:targetSection3,
       imageSlider:image3,
       tittleSLider:"AGUAS"
       },

       {targetSection:targetSection4,
       imageSlider:image4,
       tittleSLider:"ENERGIZANTES"
       },

       {targetSection:targetSection5,
        imageSlider:image5,
        tittleSLider:"HIDRATANTES"
        },
       {targetSection:targetSection6,
       imageSlider:image6,
       tittleSLider:"BEBIDA DE TÉ"
       },

       {targetSection:targetSection7,
       imageSlider:image7,
       tittleSLider:"HATSU"
       },

       {targetSection:targetSection8,
       imageSlider:image8,
       tittleSLider:"MALTA"
       },

       {targetSection:targetSection9,
        imageSlider:image9,
        tittleSLider:"CERVEZAS"
       },

       {targetSection:targetSection10,
        imageSlider:image10,
        tittleSLider:"BEBIDA FUNCIONAL"
       },

       {targetSection:targetSection11,
        imageSlider:image11,
        tittleSLider:"ALIMENTOS"
       },

    ];

    return (
      <>
        <div className="section-complete">
          <h2 className="tittle-category">Categorías</h2>
          <div className="canva-slider">
            <Swiper
              slidesPerView={4}
              spaceBetween={40}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {sliderItem.map((slider) =>
                  <SwiperSlide key={slider.tittleSLider}>
                    <a
                      data-href={`#${slider.targetSection}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(`#${slider.targetSection}`);
                        target.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="description-swiper">
                        <img src={slider.imageSlider} alt={`Imagen de ${slider.tittleSLider}`} />
                        <h3>{slider.tittleSLider}</h3>
                      </div>
                    </a>
                  </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </>
    );
  }
  
  export { Slider };