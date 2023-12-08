import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu9/img1.jpg";
import imagen2 from "./imgMenu9/img2.jpg";
import imagen3 from "./imgMenu9/img3.jpg";
import imagen4 from "./imgMenu9/img4.jpg";
import imagen5 from "./imgMenu9/img5.jpg";
import imagen6 from "./imgMenu9/img6.jpg";
import imagen7 from "./imgMenu9/img7.jpg";
import imagen8 from "./imgMenu9/img8.jpg";
import imagen9 from "./imgMenu9/img9.jpg";
import imagen10 from "./imgMenu9/img10.jpg";
import imagen11 from "./imgMenu9/img11.jpg";
import imagen12 from "./imgMenu9/img12.jpg";
import imagen13 from "./imgMenu9/img13.jpg";
import imagen14 from "./imgMenu9/img14.jpg";
import imagen15 from "./imgMenu9/img15.jpg";
import imagen16 from "./imgMenu9/img16.jpg";
import imagen17 from "./imgMenu9/img17.jpg";
import imagen18 from "./imgMenu9/img18.jpg";
import imagen19 from "./imgMenu9/img19.jpg";
import imagen20 from "./imgMenu9/img20.jpg";
import imagen21 from "./imgMenu9/img21.jpg";
import imagen22 from "./imgMenu9/img22.jpg";
import imagen23 from "./imgMenu9/img23.jpg";
import imagen24 from "./imgMenu9/img24.jpg";
import imagen25 from "./imgMenu9/img25.jpg";
import imagen26 from "./imgMenu9/img26.jpg";
import imagen27 from "./imgMenu9/img27.jpg";
import imagen28 from "./imgMenu9/img28.jpg";
import imagen29 from "./imgMenu9/img29.jpg";
import imagen30 from "./imgMenu9/img30.jpg";
import imagen31 from "./imgMenu9/img31.jpg";

function Menu9({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[

        {pos:1,
        image: imagen1,
        food:'Andina 330 ml (Retornable)',
        price:'',
        ingredients:''},

        {pos:2,
        image: imagen2,
        food:'Andina 300 ml',
        price:'',
        ingredients:''},

        {pos:3,
        image: imagen3,
        food:'Andina Lata 473 ml',
        price:'',
        ingredients:''},

        {pos:4,
        image: imagen4,
        food:'Andina Lata 355 ml',
        price:'',
        ingredients:''},

        {pos:5,
        image: imagen5,
        food:'Andina Lata 269 ml',
        price:'',
        ingredients:''},

        {pos:6,
        image: imagen6,
        food:'Andina Light 300 ml',
        price:'',
        ingredients:''},

        {pos:7,
        image: imagen7,
        food:'Andina Light 330 ml',
        price:'',
        ingredients:''},

        {pos:8,
        image: imagen8,
        food:'Andina Light 269 ml',
        price:'',
        ingredients:''},

        {pos:9,
        image: imagen9,
        food:'Andina Light 300 ml (Retornable)',
        price:'',
        ingredients:''},

        {pos:10,
        image: imagen10,
        food:'Heineken 330 ml',
        price:'',
        ingredients:''},

        {pos:11,
        image: imagen11,
        food:'Heineken 250 ml',
        price:'',
        ingredients:''},

        {pos:12,
        image: imagen12,
        food:'Heineken 330 ml',
        price:'',
        ingredients:''},

        {pos:13,
        image: imagen13,
        food:'Heineken 269 ml',
        price:'',
        ingredients:''},

        {pos:14,
        image: imagen14,
        food:'Heineken 330 ml (Retornable)',
        price:'',
        ingredients:''},

        {pos:15,
        image: imagen15,
        food:'Heineken 750 ml',
        price:'',
        ingredients:''},

        {pos:16,
        image: imagen16,
        food:'Tecate 330 ml (Retornable)',
        price:'',
        ingredients:''},

        {pos:17,
        image: imagen17,
        food:'Tecate 300 ml',
        price:'',
        ingredients:''},

        {pos:18,
        image: imagen18,
        food:'Tecate 355 ml',
        price:'',
        ingredients:''},

        {pos:19,
        image: imagen19,
        food:'Miller Lite 330 ml (Retornable)',
        price:'',
        ingredients:''},

        {pos:20,
        image: imagen20,
        food:'Miller Lite 300 ml',
        price:'',
        ingredients:''},

        {pos:21,
        image: imagen21,
        food:'Miller Lite 330 ml',
        price:'',
        ingredients:''},

        {pos:22,
        image: imagen22,
        food:'Miller 355 ml',
        price:'',
        ingredients:''},

        {pos:23,
        image: imagen23,
        food:'Miller 355 ml',
        price:'',
        ingredients:''},

        {pos:24,
        image: imagen24,
        food:'Sol 355 ml',
        price:'',
        ingredients:''},

        {pos:25,
        image: imagen25,
        food:'Sol 207 ml',
        price:'',
        ingredients:''},
        
        {pos:26,
        image:imagen26,
        food:'ordilleras Negra0 ml',
        price:'',
        ingredients:''},

        {pos:27,
        image: imagen27,
        food:'3 Cordilleras Rosada 330 ml',
        price:'',
        ingredients:''},

        {pos:28,
        image: imagen28,
        food:'3 Cordilleras Mulata 330 ml',
        price:'',
        ingredients:''},
        
        {pos:29,
        image: imagen29,
        food:'Cordilleras Mestiza 330 ml',
        price:'',
        ingredients:''},
        
        {pos:30,
        image: imagen30,
        food:'Cordilleras Mona 330 ml',
        price:'',
        ingredients:''},
        
        {pos:31,
        image: imagen31,
        food:'3 Cordilleras Blanca 330 ml',
        price:'',
        ingredients:''},
    
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>CERVEZAS</h2>
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
export { Menu9 };