import React from "react";
import "./Menu.css";
import imagen3 from "./imgMenu3/img3.jpg";
import imagen4 from "./imgMenu3/img4.jpg";
import imagen6 from "./imgMenu3/img6.jpg";
import imagen7 from "./imgMenu3/img7.jpg";
import imagen8 from "./imgMenu3/img8.jpg";
import imagen9 from "./imgMenu3/img9.jpg";
import imagen11 from "./imgMenu3/img11.jpg";
import imagen12 from "./imgMenu3/img12.jpg";
import imagen13 from "./imgMenu3/img13.jpg";
import imagen14 from "./imgMenu3/img14.jpg";
import imagen15 from "./imgMenu3/img15.jpg";
import imagen16 from "./imgMenu3/img16.jpg";
import imagen18 from "./imgMenu3/img18.jpg";
import imagen20 from "./imgMenu3/img20.jpg";
import imagen21 from "./imgMenu3/img21.jpg";
import imagen22 from "./imgMenu3/img22.jpg";
import imagen23 from "./imgMenu3/img23.jpg";
import imagen24 from "./imgMenu3/img24.jpg";
import imagen25 from "./imgMenu3/img25.jpg";
import imagen26 from "./imgMenu3/img26.jpg";
import imagen27 from "./imgMenu3/img27.jpg";

function Menu3({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }
    
    const menuItem =[
    {pos: 22, 
    image: imagen22, 
    food: 'Cristal Gas 250 ml', 
    price: '', 
    ingredients: ''},

    {pos: 3, 
    image: imagen3, 
    food: 'Cristal 300 ml', 
    price: '', 
    ingredients: ''},

    
    {pos: 4, 
    image: imagen4, 
    food: 'Cristal 420 ml', 
    price: '', 
    ingredients: ''},

    {pos: 23, 
    image: imagen23, 
    food: 'Cristal Gas 600 ml', 
    price: '', 
    ingredients: ''},

    {pos: 6, 
    image: imagen6, 
    food: 'Agua Cristal Pet 1.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 24, 
    image: imagen24, 
    food: 'H2OH Pet 250 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 27, 
    image: imagen27, 
    food: 'Limonata Pet 300 ml', //se cambio limonada por limonata
    price: '', 
    ingredients: ''},
    
    {pos: 18, 
    image: imagen18, 
    food: 'Fríopack 10 onz', 
    price: '', 
    ingredients: ''},
    
    {pos: 12, 
    image: imagen12, 
    food: 'Nacimiento 300 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 13, 
    image: imagen13, 
    food: 'Nacimiento 375 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 14, 
    image: imagen14, 
    food: 'Nacimiento 500 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 20, 
    image: imagen20, 
    food: 'Pet 1.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 21, 
    image: imagen21, 
    food: 'Pet 2.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 25, 
    image: imagen25, 
    food: 'H2OH! Pet 600 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 26, 
    image: imagen26, 
    food: 'H2OH! Pet 1.5 L', 
    price: '', 
    ingredients: ''},          

    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId} >AGUAS</h2>
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
export { Menu3 };