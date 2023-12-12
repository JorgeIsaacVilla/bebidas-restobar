import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu5/img1.jpg";
import imagen3 from "./imgMenu5/img3.jpg";
import imagen4 from "./imgMenu5/img4.jpg";
import imagen5 from "./imgMenu5/img5.jpg";
import imagen6 from "./imgMenu5/img6.jpg";

function Menu5({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
        
        {pos: 5, 
        image: 
        imagen5, 
        food: 'Squash Pet 250 ml', 
        price: '', 
        ingredients: ''},
        
        {pos: 4, 
        image: 
        imagen4, 
        food: 'Squash Pet 500 ml', 
        price: '', 
        ingredients: ''},
        
        {pos: 1, 
        image: 
        imagen1, 
        food: 'Gatorade Pet 500 ml', 
        price: '', 
        ingredients: ''},
        
        {pos: 6, 
        image: 
        imagen6, 
        food: 'G Active 500 ml', 
        price: '', 
        ingredients: ''},
        
        {pos: 3, 
        image: 
        imagen3, 
        food: 'Gatorade Pet L', 
        price: '', 
        ingredients: ''}
      ]
      
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>HIDRATANTES</h2>
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
export { Menu5 };