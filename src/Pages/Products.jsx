import React, { useEffect } from "react";
import styled from "styled-components";
import coconutfiber from "../images/CoconutFiber.webp";
import peatblock from "../images/peatblock.webp";
import charcoal from "../images/charcoalbriquette.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductStyled = styled.div`
  overflow: hidden;
  padding: 2rem 3rem;
  background-color: #9c9c9c;
  h1 {
    font-size: 3.1785rem;
    color: #fff;
  }
  div.product {
    padding: 2rem 1rem;
    h2 {
      padding-bottom: 0.5rem;
      text-align: center;
      color: #fff;
      font-size: 2rem;
    }

    div.product-container {
      display: flex;
      &.invert {
        flex-direction: row-reverse;
      }
      align-items: center;
      gap: 1rem;
      div.img-box {
        flex: 1;
        img {
          width: 100%;
          height: auto;
          max-height: 100%;
        }
      }
      div.text-box {
        font-family: "Playfair Display", serif;
        flex: 1.3;
        box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.6);
        background-color: #cbcbcb;
        border-radius: 12px;
        line-height: 1.6;
        padding: 2rem;

        p {
          font-size: 1.3rem;
        }
        table {
          padding: 1rem;
          font-size: 1.1rem;
        }
        div.additional-text {
          text-align: center;
          padding: 8px;
          p.additional-bold {
            font-weight: 700;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    div.product {
      div.product-container {
        div.img-box {
          flex: 1;
        }
        div.text-box {
          flex: 1;
          p {
            font-size: 1rem;
          }

          table {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
          div.additional-text {
            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    div.product {
      div.product-container {
        gap: 0;
        div.img-box {
          transform: scale(0.8);
        }
        flex-direction: column;
        &.invert {
          flex-direction: column;
        }
      }
    }
  }
  @media (max-width: 448px) {
    padding: 1rem;
    div.product {
      h2 {
        font-size: 1.4rem;
      }
      div.product-container {
        div.text-box {
          flex: 1;
          p {
            font-size: 0.9rem;
          }

          table {
            padding: 0.2rem;
            font-size: 0.7rem;
          }
          div.additional-text {
            p {
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <ProductStyled>
      <h1>Products</h1>
      <div className="product" data-aos="fade-right">
        <h2>Coconut Fiber</h2>
        <div className="product-container">
          <div className="img-box">
            <img src={coconutfiber} alt="coconutfiber" />
          </div>
          <div className="text-box">
            <p>
              Coconut Fiber is a natural fiber extracted from the outer husk of
              coconut.It can be used for a variety of products, usually for
              brushes, mattresses, doormats and rope.
            </p>
            <table>
              <tr>
                <td className="name">Color</td>
                <td className="value">: Golden Brown</td>
              </tr>
              <tr>
                <td className="name">Style</td>
                <td className="value">: Dried</td>
              </tr>
              <tr>
                <td className="name">Moisture</td>
                <td className="value">: 15-18%</td>
              </tr>
              <tr>
                <td className="name">Impurity</td>
                <td className="value">: &#177;3%</td>
              </tr>
              <tr>
                <td className="name">Length</td>
                <td className="value">: 10-30cm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="product " data-aos="fade-left">
        <h2>Coconut Peat Block</h2>
        <div className="product-container invert">
          <div className="img-box">
            <img
              src={peatblock}
              style={{ transform: "scale(0.9)" }}
              alt="coconutpeatblock"
            />
          </div>
          <div className="text-box">
            <p>
              Coconut peat made from the separation of coconut fiber after
              drying. Cocopeat is a growing medium that has a fairly high air
              absorption capacity and can store more air than in the soil.It can
              be used and mixed with soil or not.
            </p>
            <table>
              <tr>
                <td className="name">Size</td>
                <td className="value">: 30 x 30 x 12cm</td>
              </tr>
              <tr>
                <td className="name">Weight</td>
                <td className="value">: 5kg</td>
              </tr>
              <tr>
                <td className="name">EC</td>
                <td className="value">: &#60; 0.6 MS/CM</td>
              </tr>
              <tr>
                <td className="name">PH</td>
                <td className="value">: 5.0-7.0</td>
              </tr>
              <tr>
                <td className="name">Moisture</td>
                <td className="value">: 18%</td>
              </tr>
              <tr>
                <td className="name">Expansion</td>
                <td className="value">: &#62; 60 Liters</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="product" data-aos="fade-right">
        <h2>Coconut Charcoal Briquette</h2>
        <div className="product-container">
          <div className="img-box">
            <img src={charcoal} alt="coconutcharcoalbriquette" />
          </div>
          <div className="text-box">
            <p>
              Coconut Charcoal Briquette is made from Coconut shell charcoal.It
              produces more heat and lasts longer than ordinary charcoal.Coconut
              charcoal briquette usually used for grilling or barbecue and for
              smoking shisha/hookah.
            </p>
            <div className="additional-text">
              <p className="additional-bold">Specifications : </p>
              <p>
                We accept customized specifications of the products based on our
                customer demands and wishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Products;
