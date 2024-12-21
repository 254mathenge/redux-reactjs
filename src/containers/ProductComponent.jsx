/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";
import "./ProductComponent.css"
 const ProductComponent=() =>{
    const products=useSelector((state)=> state.allProducts.products);
    const{id ,title,category}=products;
    return(
        
        <div className="product-listing">
             <div className="ui link ">
             <div className="card">
             <div className="image">
                <img src="" alt/>
             </div>
             <div className="content">
             <div className="header">{title}</div>
            </div>
        </div>
            </div>
        </div>
    )
 }
 export default ProductComponent;