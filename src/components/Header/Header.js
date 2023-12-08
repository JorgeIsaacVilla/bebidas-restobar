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
                        <a href="https://eldesviorestobar59.com" className="access-online-tarjet"><strong>Ver carta online</strong></a>
                    </div>
                </div>
                <div className="menu-hamburguesa" onClick={toggleMenu}></div>
            </section>
        </>
    );
}

export {Header};