/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
 const ProductListing =() =>{
    const products =useSelector((state) => state);
    console.log(products);
    return(
        
        <div className="product-listing">
            <ProductComponent/>
        </div>
    )
 }
 export default ProductListing;