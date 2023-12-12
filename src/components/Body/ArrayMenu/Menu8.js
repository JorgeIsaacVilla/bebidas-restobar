import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu8/img1.jpg";
import imagen2 from "./imgMenu8/img2.jpg";
import imagen3 from "./imgMenu8/img3.jpg";
import imagen4 from "./imgMenu8/img4.jpg";
import imagen5 from "./imgMenu8/img5.jpg";

function Menu8({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
        {pos: 2, image: imagen2, food: 'Natu Malta Pet 200 ml', price: '', ingredients: ''},
        {pos: 3, image: imagen3, food: 'Natu Malta Pet 400 ml', price: '', ingredients: ''},
        {pos: 1, image: imagen1, food: 'Natu Malta Botella 330 ml (Retornable)', price: '', ingredients: ''},
        {pos: 4, image: imagen4, food: 'Natu Malta Pet 1 L', price: '', ingredients: ''},
        {pos: 5, image: imagen5, food: 'Natu Malta 1.5 L', price: '', ingredients: ''}
      ]
      
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>MALTAS</h2>
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
export { Menu8 };