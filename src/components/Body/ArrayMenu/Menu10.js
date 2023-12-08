import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu10/img1.jpg";
import imagen2 from "./imgMenu10/img2.jpg";
import imagen3 from "./imgMenu10/img3.jpg";
import imagen4 from "./imgMenu10/img4.jpg";

function Menu10({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
   
    {pos:1,
    image: imagen1,
    food:'Original 1 L',
    price:'',
    ingredients:''},
    
    {pos:2,
    image: imagen2,
    food:'Coconut 1 L',
    price:'',
    ingredients:''},
    
    {pos:3,
    image: imagen3,
    food:'Sin azúcar 1 L',
    price:'',
    ingredients:''},
    
    {pos:4,
    image: imagen4,
    food:'Cristal Aloe Pet 330 ml',
    price:'',
    ingredients:''},
        
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>BEBIDA FUNCIONAL</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                       <img src={item.image} />
                        <div>
                            <h3 
                             className="tittle-food">
                                {item.food}</h3>
                                <p className="ingredients">
                                    {item.ingredients}
                                </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
                )}
            </ul>
        </>
    )
};
export { Menu10 };