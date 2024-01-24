import React, { useState } from "react";
import "./Header.css";
import { Menu } from "./Menu/Menu";

function Header() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () =>{
        setMenuVisible(!menuVisible);
    };

    return(
        <>
            {menuVisible && <Menu />}
            <section className="component-header">
                <div className="header-access">
                    <div className="logo-restaurante"></div>
                    <div>
                        <a href="https://jorgeisaacvilla.github.io/el-desvio-restobar/" className="access-online-tarjet"><strong>Ver carta online</strong></a>
                    </div>
                    <div className="logo-postobon"></div>
                </div>
                <div className="menu-hamburguesa" onClick={toggleMenu}></div>
            </section>
        </>
    );
}

export {Header};