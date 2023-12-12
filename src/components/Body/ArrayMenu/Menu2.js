import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu2/img1.jpg";
import imagen2 from "./imgMenu2/img2.jpg";
import imagen3 from "./imgMenu2/img3.jpg";
import imagen4 from "./imgMenu2/img4.jpg";
import imagen5 from "./imgMenu2/img5.jpg";
import imagen6 from "./imgMenu2/img6.jpg";
import imagen7 from "./imgMenu2/img7.jpg";
import imagen8 from "./imgMenu2/img8.jpg";
import imagen9 from "./imgMenu2/img9.jpg";
import imagen10 from "./imgMenu2/img10.jpg";
import imagen11 from "./imgMenu2/img11.jpg";
import imagen12 from "./imgMenu2/img12.jpg";
import imagen13 from "./imgMenu2/img13.jpg";
import imagen14 from "./imgMenu2/img14.jpg";
import imagen15 from "./imgMenu2/img15.jpg";
import imagen16 from "./imgMenu2/img16.jpg";
import imagen17 from "./imgMenu2/img17.jpg";
import imagen18 from "./imgMenu2/img18.jpg";
import imagen19 from "./imgMenu2/img19.jpg";
import imagen20 from "./imgMenu2/img20.jpg";
import imagen21 from "./imgMenu2/img21.jpg";
import imagen22 from "./imgMenu2/img22.jpg";
import imagen23 from "./imgMenu2/img23.jpg";

function Menu2({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[

    {pos: 22, 
    image: imagen22, 
    food: 'Hit Néctar 210 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 7, 
    image: imagen7, 
    food: 'Tutti Frutti 18 gr (Polvo)', 
    price: '', 
    ingredients: ''},
    
    {pos: 9, 
    image: imagen9, 
    food: 'Tutti Frutti 350 ml (Retornable)', 
    price: '', 
    ingredients: ''},
    
    {pos: 12, 
    image: imagen12, 
    food: 'Tutti Frutti 500 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 23, 
    image: imagen23, 
    food: 'Hit 100% 1 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 3, 
    image: imagen3, 
    food: 'Hit 200 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 17, 
    image: imagen17, 
    food: 'Hit Pet 200 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 1, 
    image: imagen1, 
    food: 'Hit Pet 400 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 18, 
    image: imagen18, 
    food: 'Hit Pet 400 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 15, 
    image: imagen15, 
    food: 'Hit Pet 500 ml', 
    price: '', 
    ingredients: ''},
    
    {pos: 20, 
    image: imagen20, 
    food: 'Hit Néctar 250/237 ml (Retornable)', 
    price: '', 
    ingredients: ''},
    
    {pos: 16, 
    image: imagen16, 
    food: 'Hit Pet 1.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 8, 
    image: imagen8, 
    food: 'Hit Pet 1.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 10, 
    image: imagen10, 
    food: 'Tutti Frutti 1.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 14, 
    image: imagen14, 
    food: 'Hit Pet 2.5 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 13, 
    image: imagen13, 
    food: 'Hit Pet 2 L', 
    price: '', 
    ingredients: ''},
    
    {pos: 11, 
    image: imagen11, 
    food: 'Tutti Frutti 2 L (Solo aplica para Costa)', 
    price: '', 
    ingredients: ''},
    
    {pos: 21, 
    image: imagen21, 
    food: 'Hit Néctar Tetra L', 
    price: '', 
    ingredients: ''},
    
    {pos: 19, 
    image: imagen19, 
    food: 'Hit Néctar 200 ml', 
    price: '', 
    ingredients: ''},
          
    ]
    
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>JUGOS</h2>
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
export { Menu2 };