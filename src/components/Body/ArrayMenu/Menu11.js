import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu11/img1.jpg";
import imagen2 from "./imgMenu11/img2.jpg";
import imagen3 from "./imgMenu11/img3.jpg";
import imagen4 from "./imgMenu11/img4.jpg";
import imagen5 from "./imgMenu11/img5.jpg";
import imagen6 from "./imgMenu11/img6.jpg";
import imagen7 from "./imgMenu11/img7.jpg";
import imagen8 from "./imgMenu11/img8.jpg";
import imagen9 from "./imgMenu11/img9.jpg";
import imagen10 from "./imgMenu11/img10.jpg";
import imagen11 from "./imgMenu11/img11.jpg";
import imagen12 from "./imgMenu11/img12.jpg";
import imagen13 from "./imgMenu11/img13.jpg";
import imagen14 from "./imgMenu11/img14.jpg";
import imagen15 from "./imgMenu11/img15.jpg";
import imagen16 from "./imgMenu11/img16.jpg";
import imagen17 from "./imgMenu11/img17.jpg";
import imagen18 from "./imgMenu11/img18.jpg";
import imagen19 from "./imgMenu11/img19.jpg";
import imagen20 from "./imgMenu11/img20.jpg";
import imagen21 from "./imgMenu11/img21.jpg";
import imagen22 from "./imgMenu11/img22.jpg";
import imagen23 from "./imgMenu11/img23.jpg";
import imagen24 from "./imgMenu11/img24.jpg";
import imagen25 from "./imgMenu11/img25.jpg";
import imagen26 from "./imgMenu11/img26.jpg";
import imagen27 from "./imgMenu11/img27.jpg";

function Menu11({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        {pos: 8, image: imagen8, food: 'Mostaza 43 gr', price: '', ingredients: ''},
        {pos: 16, image: imagen16, food: 'Mani Salado 40 gr', price: '', ingredients: ''},
        {pos: 20, image: imagen20, food: 'Vinagre Blanco 370 ml', price: '', ingredients: ''},
        {pos: 21, image: imagen21, food: 'Vinagre Blanco 500 ml', price: '', ingredients: ''},
        {pos: 22, image: imagen22, food: 'Vinagreta 180 g', price: '', ingredients: ''},
        {pos: 19, image: imagen19, food: 'Vinagreta 335 g', price: '', ingredients: ''},
        {pos: 15, image: imagen15, food: 'Soya 165 ml', price: '', ingredients: ''},
        {pos: 9, image: imagen9, food: 'ChimiChurri 165 gr', price: '', ingredients: ''},
        {pos: 7, image: imagen7, food: 'Mayonesa 85 gr', price: '', ingredients: ''},
        {pos: 3, image: imagen3, food: 'Mayonesa 90 gr', price: '', ingredients: ''},
        {pos: 2, image: imagen2, food: 'Mayonesa 400 gr', price: '', ingredients: ''},
        {pos: 13, image: imagen13, food: 'China 1150 ml', price: '', ingredients: ''},
        {pos: 26, image: imagen26, food: 'Maple 480 g', price: '', ingredients: ''},
        {pos: 27, image: imagen27, food: 'Syrup 480 g', price: '', ingredients: ''},
        {pos: 12, image: imagen12, food: 'Carnes 180 gr', price: '', ingredients: ''},
        {pos: 11, image: imagen11, food: 'BBQ 1150 gr', price: '', ingredients: ''},
        {pos: 5, image: imagen5, food: 'Tomate 565 gr', price: '', ingredients: ''},
        {pos: 4, image: imagen4, food: 'Chimichurri 1200 gr', price: '', ingredients: ''},
        {pos: 14, image: imagen14, food: 'Carnes 1250 gr', price: '', ingredients: ''},
        {pos: 6, image: imagen6, food: 'BBQ 1300 gr', price: '', ingredients: ''},
        {pos: 10, image: imagen10, food: 'Tomate 4400 gr', price: '', ingredients: ''},
        {pos: 18, image: imagen18, food: 'Vinagre 1000 g', price: '', ingredients: ''},
        {pos: 23, image: imagen23, food: 'Vinagre de frutas 3000 ml', price: '', ingredients: ''},
        {pos: 24, image: imagen24, food: 'Vinagre de frutas 500 ml', price: '', ingredients: ''},
        {pos: 17, image: imagen17, food: 'Vinagreta 3440 ml', price: '', ingredients: ''},
        {pos: 25, image: imagen25, food: 'Chedar 200 g', price: '', ingredients: ''},
        {pos: 1, image: imagen1, food: 'Salsa Rosada 1000 gr', price: '', ingredients: ''}
      ]
      
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ALIMENTOS</h2>
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
export { Menu11 };