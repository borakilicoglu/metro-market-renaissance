"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useWindowWidth } from "@/hooks/useWindowWidth";

// Accept props in the Hero function
export default function Slider({
  card = false,
  title = "",
  content,
  perView = [1, 1],
  showPagination = false,
  shadow = false,
}: {
  card?: boolean;
  title?: string;
  content: any;
  perView?: number[];
  showPagination?: boolean;
  shadow?: boolean;
}) {
  const [navVisible, setNavVisible] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div class="flex-1 ${className}">${index + 1}</div>`;
    },
  };

  function generateRandomClass(length = 8) {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");
  }

  const left = generateRandomClass();
  const right = generateRandomClass();

  return (
    <div
      className={`container mx-auto items-center flex flex-col px-8 md:px-0`}
    >
      <div className="flex w-full">
        {title ? (
          <h3 className="text-left text-dark font-[800] text-[1.6rem]">
            {title}
          </h3>
        ) : null}
      </div>
      <div className="container mx-auto items-center flex">
        <button
          className={`z-50 hidden md:block ${left} -ml-12 ${
            navVisible
              ? "opacity-100"
              : "opacity-0 transition-opacity duration-500"
          }
          ${shadow ? "mb-10" : ""}
        `}
        >
          <ChevronLeftIcon className="w-12" />
        </button>
        <Swiper
          spaceBetween={20}
          slidesPerView={isMobile ? perView[0] : perView[1]}
          pagination={showPagination ? pagination : false}
          modules={[Pagination, Navigation]}
          navigation={{ nextEl: `.${right}`, prevEl: `.${left}` }}
        >
          {content.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              {card ? (
                <div className="flex flex-col border rounded-lg relative mt-6">
                  <span className="w-12 h-12 bg-secondary rounded-full -top-6 -right-6 absolute items-center justify-center flex plus">
                    <PlusIcon className="w-8" />
                  </span>
                  <Image
                    className={`w-full p-14`}
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                  />
                  <div className="bg-smoke text-center h-[11rem] p-4 flex flex-col space-y-1 justify-around">
                    <span className="font-[600] text-[1.4rem] text-dark">
                      {item.title}
                    </span>
                    <span className="text-[1.4rem] text-clay">
                      {item.serialTitle}
                    </span>
                    <span className="text-[1.4rem] font-[600] text-dark">
                      {item.price}
                    </span>
                  </div>
                </div>
              ) : (
                <Image
                  className={`w-full ${shadow ? "shadow-lg mb-10" : ""}`}
                  style={{
                    border: shadow ? "1px solid #eee" : "",
                    borderRadius: shadow ? "0.5rem" : "",
                  }}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`z-50 hidden md:block ${right} -mr-12 ${
            navVisible
              ? "opacity-100"
              : "opacity-0 transition-opacity duration-500"
          }
          ${shadow ? "mb-10" : ""}
        `}
        >
          <ChevronRightIcon className="w-12" />
        </button>
      </div>
    </div>
  );
}
