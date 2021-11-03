import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureSlide from "./Home/FeatureSlide";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

const Arrow = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 10;
  &.next {
    right: 5px;
    top: 50%;
  }
  &.prev {
    left: 5px;
    top: 50%;
  }
  svg {
    transition: color 300ms;
    &:hover {
      color: #fff;
    }
  }
`;
const SlideContainer = styled.div`
  transform: scale(0.4);
  transition: transform 300ms;
  opacity: 0.5;
  &.activeSlide {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const slides = [
  {
    logo: "P",
    title: "Professionalism",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae?",
  },

  {
    logo: "O",
    title: "Outstanding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae?",
  },

  {
    logo: "W",
    title: "Well Prepared",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae?",
  },

  {
    logo: "E",
    title: "Empathy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae?",
  },

  {
    logo: "R",
    title: "Responsibilities",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, recusandae?",
  },
];

const NextArrow = ({ onClick }) => (
  <Arrow className="next" onClick={onClick}>
    <FaArrowRight />
  </Arrow>
);

const PrevArrow = ({ onClick }) => (
  <Arrow className="prev" onClick={onClick}>
    <FaArrowLeft />
  </Arrow>
);
const SlickSlider = () => {
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    dots: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImgIndex(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const [imgIndex, setImgIndex] = useState(0);
  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <SlideContainer
            key={idx}
            className={idx === imgIndex ? "slide activeSlide" : "slide"}
          >
            <FeatureSlide
              logo={slide.logo}
              title={slide.title}
              desc={slide.desc}
            />
          </SlideContainer>
        ))}
      </Slider>
    </>
  );
};

export default SlickSlider;
