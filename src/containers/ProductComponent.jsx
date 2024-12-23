/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.css"
 const ProductComponent=() =>{
    const products=useSelector((state)=> state.allProducts.products);
    if (!products || products.length === 0) {
        return <div>No products available.</div>;
    }
    const renderList =products.map((product)=>{
        const {id,image,title,price,category}=product;
        return(
        
            <div className="product-listing" key={product.id}>
                <Link to={`/product/${id}`}>
                 <div className="ui link ">
                 <div className="card">
                 <div className="image">
                    <img src={image} alt={title}/>
                 </div>
                 <div className="content">
                 <div className="header">{title}</div>
                 <div className="meta">$ {price}</div>
                 <div className="meta">{category}</div>
                 
                </div>
                
            </div>
                </div>
                </Link>
            </div>
        )
    })
    return(
        <>{renderList}</>
    )
    
 }
 export default ProductComponent;