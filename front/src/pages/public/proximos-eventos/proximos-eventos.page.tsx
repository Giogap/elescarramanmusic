import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  EffectCoverflow,
} from "swiper/modules";
// @ts-expect-error - Swiper CSS modules
import "swiper/css";
// @ts-expect-error - Swiper CSS modules
import "swiper/css/navigation";
// @ts-expect-error - Swiper CSS modules
import "swiper/css/pagination";
// @ts-expect-error - Swiper CSS modules
import "swiper/css/mousewheel";
// @ts-expect-error - Swiper CSS modules
import "swiper/css/effect-coverflow";
import "./CarouselStyles.css";
import { Badge, Button } from "@heroui/react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import EscucharComponent from "../../../components/escuchar/escuchar.component";
import VerDetallesDrawer from "./modules/ver-detalles.drawer";

import ProximosEventosViewModel from "./proximos-eventos.viewmodel";
import getDaysRemaining from "../../../utils/getDaysRemaining";

const ProximosEventos = () => {
  const { concerts } = ProximosEventosViewModel();

  return (
    <div className="mt-8 p-4 md:h-[600px]">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}
        centeredSlides={true}
        grabCursor={true}
        effect="coverflow"
        mousewheel={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 20,
              modifier: 1,
              scale: 0.95,
            },
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 30,
              modifier: 1.2,
              scale: 0.9,
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              scale: 0.95,
            },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              scale: 1,
            },
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
        className="swiper-container"
      >
        {concerts.map((concert) => (
          <SwiperSlide key={concert.id}>
            <div className="md:h-full w-64 md:w-full rounded-lg bg-black/70 p-2 md:p-4 backdrop-blur-sm transition-all hover:bg-black/80">
              <div className="flex flex-col gap-1 md:gap-4">
                <EscucharComponent uuid={concert.id.toString()} />
                <img
                  src={concert.image}
                  alt={concert.band}
                  className="md:mb-4 md:h-72 lg:h-96 w-64 md:w-full rounded-lg object-cover"
                />
                <h5 className="text-xl font-bold tracking-tight text-red-400">
                  {concert.band}
                </h5>
                <Badge color="danger" variant="flat" className="w-fit">
                  <p className="text-gray-400">{concert.genre}</p>
                </Badge>
              </div>
              <div className="space-y-1 md:space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPinIcon className="mr-2 h-4 w-4 text-red-500" />
                  {concert.venue}
                </div>
                <div className="flex items-center text-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4 text-red-500" />
                  {concert.date}
                  <span className="ml-2 text-sm text-red-400 font-medium">
                    (faltan {getDaysRemaining(concert.date)} días)
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <ClockIcon className="mr-2 h-4 w-4 text-red-500" />
                  {concert.time}
                </div>
                <div className="flex items-center justify-between pt-1 md:pt-4">
                  <span className="text-xl md:text-2xl font-bold text-red-400">
                    {concert.price}
                  </span>
                  <div className="grid md:flex gap-2">
                    <VerDetallesDrawer data={concert} />
                    <Button color="danger" variant="solid">
                      Comprar entrada
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev !text-red-500 hover:!text-red-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="swiper-button-next !text-red-500 hover:!text-red-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProximosEventos;
