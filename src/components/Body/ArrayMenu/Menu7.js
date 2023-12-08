import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu7/img1.jpg";
import imagen2 from "./imgMenu7/img2.jpg";
import imagen3 from "./imgMenu7/img3.jpg";
import imagen4 from "./imgMenu7/img4.jpg";
import imagen5 from "./imgMenu7/img5.jpg";
import imagen6 from "./imgMenu7/img6.jpg";
import imagen7 from "./imgMenu7/img7.jpg";
import imagen8 from "./imgMenu7/img8.jpg";
import imagen9 from "./imgMenu7/img9.jpg";
import imagen10 from "./imgMenu7/img10.jpg";
import imagen11 from "./imgMenu7/img11.jpg";
import imagen12 from "./imgMenu7/img12.jpg";
import imagen13 from "./imgMenu7/img13.jpg";
import imagen14 from "./imgMenu7/img14.jpg";
import imagen15 from "./imgMenu7/img15.jpg";
import imagen16 from "./imgMenu7/img16.jpg";
import imagen17 from "./imgMenu7/img17.jpg";

function Menu7({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[

    {pos:1,
    image: imagen1,
    food:'Infusión 24 gr',
    price:'',
    ingredients:''},
    
    {pos:2,
    image: imagen2,
    food:'Chocolate 23 gr',
    price:'',
    ingredients:''},
    
    {pos:3,
    image: imagen3,
    food:'Mango 25 gr',
    price:'',
    ingredients:''},
    
    {pos:4,
    image: imagen4,
    food:'Uchuvas 20 gr',
    price:'',
    ingredients:''},
    
    {pos:5,
    image: imagen5,
    food:'Bites 25 gr',
    price:'',
    ingredients:''},
    
    {pos:6,
    image: imagen6,
    food:'Maní dulce 300 gr',
    price:'',
    ingredients:''},
    
    {pos:7,
    image: imagen7,
    food:'Maní salado 40 gr',
    price:'',
    ingredients:''},
    
    {pos:8,
    image: imagen8,
    food:'Mix de nueces 40 gr',
    price:'',
    ingredients:''},
    
    {pos:9,
    image: imagen9,
    food:'Quinua 20 gr',
    price:'',
    ingredients:''},
    
    {pos:10,
    image: imagen10,
    food:'Quinua Orgánica 150 gr',
    price:'',
    ingredients:''},
    
    {pos:11,
    image: imagen11,
    food:'Semillas de Chía 150 gr',
    price:'',
    ingredients:''},
    
    {pos:12,
    image: imagen12,
    food:'Kale 100 gr',
    price:'',
    ingredients:''},
    
    {pos:13,
    image: imagen13,
    food:'Maca 100 ml',
    price:'',
    ingredients:''},
    
    {pos:14,
    image: imagen14,
    food:'Té 250 ml',
    price:'',
    ingredients:''},
    
    {pos:15,
    image: imagen15,
    food:'Té 400 ml',
    price:'',
    ingredients:''},
    
    {pos:16,
    image: imagen16,
    food:'Soda 300 ml',
    price:'',
    ingredients:''},
    
    {pos:17,
    image: imagen17,
    food:'Té 200 ml',
    price:'',
    ingredients:''},
    
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>HATSU</h2>
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
export { Menu7 };