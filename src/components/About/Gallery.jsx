import React from "react";
import styled from "styled-components";
import { GalleryImg } from "../../Data";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const GalleryStyled = styled.div`
  background-color: black;
  padding: 1rem;
  h1 {
    font-family: "Inter", sans-serif;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 3.1875rem;
  }
  div.img-focus {
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.7);
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 40;
    transition: all 0.4s ease-in-out;

    &.open {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
    img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      line-height: 0;
      padding: 20px 0;
      margin: 0 auto;
    }
    svg {
      background-color: rgba(15, 15, 15, 0.3);
      padding: 3px;
      border-radius: 50%;
      position: fixed;
      z-index: 50;
      top: 40px;
      right: 40px;
      color: #fff;
      font-size: 1.7rem;
    }
  }
  div.gallery-container {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    column-width: 33%;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;

    div.pic {
      cursor: pointer;
      &:hover {
        opacity: 0.6;
        transition: all 0.3s ease-in-out;
      }
      img {
        width: 100%;
        height: auto;
        max-height: 100%;
      }
    }
  }
  @media (max-width: 991px) {
    text-align: center;
    h1 {
      font-size: 2.7rem;
    }
    div.gallery-container {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 448px) {
    div.gallery-container {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1;
      column-width: 100%;
      -webkit-column-width: 100%;
      -moz-column-width: 100%;
    }
  }
`;

const Gallery = () => {
  const [toggleImg, setToggleImg] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const handleImgClick = (imgSrc) => {
    setImgSrc(imgSrc);
    setToggleImg(true);
  };
  return (
    <GalleryStyled>
      <h1>Gallery</h1>
      <div className={toggleImg ? "img-focus open" : "img-focus"}>
        <img src={imgSrc} alt={imgSrc} />
        <MdOutlineClose onClick={() => setToggleImg(false)} />
      </div>
      <div className="gallery-container">
        {GalleryImg.map((img, idx) => {
          return (
            <div key={idx} className="pic" onClick={() => handleImgClick(img)}>
              <img src={img} alt={`img${idx}`} />;
            </div>
          );
        })}
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
