import React, { Component } from "react";
import Logo from "../../assets/simfmdo.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
    render() {
        return (
            <main id="navbar">
                <section className="logo">
                    <img src={Logo} alt="Kitten Logo" />
                </section>
                <section className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Nosotros</NavLink>
                    <NavLink to="/">Tienda</NavLink>
                    <NavLink to="/">Conjuntos</NavLink>
                </section>
                <section className="search">
                    <div className="icon"></div>
                    <p>Buscar</p>
                </section>
                <section className="cart">
                    <p>0.00$</p>
                    <div className="bolsa">
                        <div className="items">0</div>
                    </div>
                </section>
            </main>
        );
    }
}
