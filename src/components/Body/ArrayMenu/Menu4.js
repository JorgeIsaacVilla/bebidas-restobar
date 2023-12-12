import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu4/img1.jpg";
import imagen2 from "./imgMenu4/img2.jpg";
import imagen3 from "./imgMenu4/img3.jpg";
import imagen4 from "./imgMenu4/img4.jpg";
import imagen5 from "./imgMenu4/img5.jpg";
import imagen6 from "./imgMenu4/img6.jpg";
import imagen7 from "./imgMenu4/img7.jpg";
import imagen8 from "./imgMenu4/img8.jpg";
import imagen9 from "./imgMenu4/img9.jpg";
import imagen10 from "./imgMenu4/img10.jpg";
import imagen11 from "./imgMenu4/img11.jpg";

function Menu4({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
                     
    {pos: 7, 
    image: imagen7,
    food: 'Peak 250 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 6, 
    image: imagen6,
    food: 'Speed Max cero 250 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 5, 
    image: imagen5,
    food: 'Speed Max Pet 250 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 1, 
    image: imagen1,
    food: 'Speed Max Lata 269 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 8, 
    image: imagen8,
    food: 'Red Bull Lata 250 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 2, 
    image: imagen2,
    food: 'Speed Max Pet 400 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 3, 
    image: imagen3,
    food: 'Speed Max Pet L', 
    price: '', 
    ingredients: ''},
    
    {pos: 4, 
    image: imagen4,
    food: 'Speed Max Lata 355 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 9, 
    image: imagen9,
    food: 'RedBull Lata 355 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 10, 
    image: imagen10,
    food: 'RedBull Tropical 355 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 11, 
    image: imagen11,
    food: 'Sugar Free 355 ml', 
    price: '', 
    ingredients: ''}
    
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ENERGIZANTES</h2>
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
export { Menu4 };