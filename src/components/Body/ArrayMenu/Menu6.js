import React from "react";
import "./Menu.css";
import imagen3 from "./imgMenu6/img3.jpg";
import imagen4 from "./imgMenu6/img4.jpg";
import imagen5 from "./imgMenu6/img5.jpg";
import imagen6 from "./imgMenu6/img6.jpg";
import imagen7 from "./imgMenu6/img7.jpg";

function Menu6({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
    
    {pos:3,
    image: imagen3,
    food:'Mr. Tea 200 ml',
    price:'',
    ingredients:''},
    
    {pos:4,
    image: imagen4,
    food:'Mr. Tea 500 ml',
    price:'',
    ingredients:''},
    
    {pos:5,
    image: imagen5,
    food:'Mr Tea 1.5 L',
    price:'',
    ingredients:''},
    
    {pos:6,
    image: imagen6,
    food:'Mr. Tea 250 ml',
    price:'',
    ingredients:''},
    
    {pos:7,
    image: imagen7,
    food:'Mr. Tea 300 ml',
    price:'',
    ingredients:''},

        ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>BEBIDA DE TÉ</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                       <img src={item.image} />
                        <div>
                            <h3 
                             className="tittle-food">
                                {item.food.toUpperCase()}</h3>
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
export { Menu6 };