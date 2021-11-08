import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import { ProductData } from "../../Data";
const ProductStyled = styled.div`
  overflow: hidden;
  width: 100%;

  padding: 2rem 3rem;
  h1 {
    padding: 1rem 0;
    font-size: 3.1875rem;
  }
  div.product-container {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

const ProductsSection = () => {
  return (
    <ProductStyled>
      <h1>Our Products</h1>
      <div className="product-container">
        {ProductData.map((data, idx) => {
          return (
            <ProductCard
              img={data.image}
              key={data.productID}
              title={data.name}
              desc={data.desc}
              link={`/product/${data.productID}`}
            />
          );
        })}
      </div>
    </ProductStyled>
  );
};

export default ProductsSection;
