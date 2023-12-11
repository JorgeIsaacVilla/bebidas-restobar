import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu1/img1.jpg";
import imagen2 from "./imgMenu1/img2.jpg";
import imagen3 from "./imgMenu1/img3.jpg";
import imagen4 from "./imgMenu1/img4.jpg";
import imagen5 from "./imgMenu1/img5.jpg";
import imagen6 from "./imgMenu1/img6.jpg";
import imagen7 from "./imgMenu1/img7.jpg";
import imagen9 from "./imgMenu1/img9.jpg";
import imagen10 from "./imgMenu1/img10.jpg";
import imagen11 from "./imgMenu1/img11.jpg";
import imagen12 from "./imgMenu1/img12.jpg";
import imagen13 from "./imgMenu1/img13.jpg";
import imagen14 from "./imgMenu1/img14.jpg";
import imagen15 from "./imgMenu1/img15.jpg";
import imagen16 from "./imgMenu1/img16.jpg";
import imagen17 from "./imgMenu1/img17.jpg";
import imagen18 from "./imgMenu1/img18.jpg";
import imagen19 from "./imgMenu1/img19.jpg";
import imagen20 from "./imgMenu1/img20.jpg";

function Menu1({sectionId, onProductClick}) {

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
    {pos:3,
    image: imagen3,
    food:'Pet 2.5 L',
    price:'',
    ingredients:''},

    {pos:4,
    image: imagen4,
    food:'Pet 250 ml',
    price:'',
    ingredients:''},

    {pos:5,
    image: imagen5,
    food:'Pet 2 L',
    price:'',
    ingredients:''},

    {pos:6,
    image: imagen6,
    food:'Pet 1 L',
    price:'',
    ingredients:''},

    {pos:7,
    image: imagen7,
    food:'Canada Dry 10 onz',
    price:'',
    ingredients:''},

    {pos:9,
    image: imagen9,
    food:'12 onz (Retornable)',
    price:'',
    ingredients:''},

    {pos:10,
    image: imagen10,
    food:'1.25 L',
    price:'',
    ingredients:''},

    {pos:11,
    image: imagen11,
    food:'2.0 PRB (Retornable)',
    price:'',
    ingredients:''},

    {pos:12,
    image: imagen12,
    food:'Lata 269 ml',
    price:'',
    ingredients:''},

    {pos:13,
    image: imagen13,
    food:'Pet 1.75 L',
    price:'',
    ingredients:''},

    {pos:14,
    image: imagen14,
    food:'Pet 3.125 L',
    price:'',
    ingredients:''},

    {pos:15,
    image: imagen15,
    food:'Pet 600 ml',
    price:'',
    ingredients:''},

    {pos:16,
    image: imagen16,
    food:'Pet 500 ml',
    price:'',
    ingredients:''},

    {pos:17,
    image: imagen17,
    food:'Pet 1.5 L',
    price:'',
    ingredients:''},

    {pos:18,
    image: imagen18,
    food:'8,5 onz (Retornable)',
    price:'',
    ingredients:''},

    {pos:19,
    image: imagen19,
    food:'Aguapanela Pet 1.5 L',
    price:'',
    ingredients:''},

    {pos:20,
    image: imagen20,
    food:'Aguapanela Pet 400 ml',
    price:'',
    ingredients:''},

    {pos:1,
    image: imagen1,
    food:'Acqua Pet 500 ml',
    price:'',
    ingredients:''},

    {pos:2,
    image: imagen2,
    food:'Acqua Pet 1.5 L',
    price:'',
    ingredients:''},
    ];

    return(
     <div >
        <h2 className="tittle-item" id={sectionId}>GASEOSAS</h2>
        <ul>
            {menuItem.map((item)=>
                <li key={item.pos} onClick={() => handleItemclick(item)}>
                    <div className="item-contend">
                        <img src = {item.image} />
                        <div>
                            <h3 className="tittle-food"> {item.food.toUpperCase()} </h3>
                            <p className="ingredients"> {item.ingredients} </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
            )}
        </ul>
     </div>   
    )
}
export { Menu1 };