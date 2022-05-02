
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOMEDECOR, KIDSDATA, MENDATA, WOMENDATA } from "../Redux/actionTypes";
import {filterProducts} from "../Redux/actions"

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleclick =(type)=>{
    filterProducts(dispatch,type)
  }
  return (
    
    <nav style={{ backgroundColor: "#8000ff", padding: 20,color:"black" }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      
      <Link to={"/"}>Home</Link>
      <Link  to={"/about"}>About</Link>
      <Link to={"/products"}>Products</Link>
      <Link onClick={()=>handleclick(MENDATA)} to={"/products/men"}>Men</Link>
      <Link  onClick={()=>handleclick(WOMENDATA)} to={"/products/women"}>Women</Link>
      <Link onClick={()=>handleclick(KIDSDATA)}  to={"/products/kids"}>Kids</Link>
      <Link  onClick={()=>handleclick(HOMEDECOR)} to={"/products/homedecor"}>Decor</Link>
    </nav>
  );
};
