import React, { useEffect } from "react";
import axios from "axios";
import { Select } from "./Styled";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { getProductsData } from "../Redux/actions";
import { HIGH_TO_LOW, LOW_TO_HIGH } from "../Redux/actionTypes";
export const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    getProductsData(dispatch);
    // fetch ProductsData using redux-thunk on every mount
  }, []);
  const handleSort = (e) => {

    if(e.target.value=="asc"){
      type=HIGH_TO_LOW;
      sortProducts(dispatch,type)
    }
    else{
      type=LOW_TO_HIGH;
      sortProducts(dispatch,type)
    }
   
    // dispatch sort products on change
  };

  const Grid = styled.div`
    boeder: 1px solid;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 10px;
  `
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {data.map((el) => {
          return <ProductCard key={el.id} item={el} />;
        })}

        {/* iterate data and show each POroduct card */}
      </Grid>
    </>
  );
};
