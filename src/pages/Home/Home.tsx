import React, { Component } from "react";
import Img1 from "../../assets/carrusel-imagen.png";
import Model1 from "../../assets/model-1.png";
import Model2 from "../../assets/model-2.png";
import Sale1 from "../../assets/sale-1.png";
import Sale2 from "../../assets/sale-2-alt.png";
import Insta1 from "../../assets/outfit-1.png";
import Insta2 from "../../assets/outfit-2.png";
import Insta3 from "../../assets/outfit-3.png";
import Insta4 from "../../assets/outfit-4.png";
import Insta5 from "../../assets/outfit-5.png";
import Insta6 from "../../assets/outfit-6.png";
import Insta7 from "../../assets/outfit-7.png";
import { Link } from "react-router-dom";
import "./Home.scss";

export default class Home extends Component {
    render() {
        return (
            <main id="home">
                <section className="carousel-container">
                    <div className="carousel">
                        <img src={Img1} alt="" />
                        <img src={Img1} alt="" />
                        <img src={Img1} alt="" />
                    </div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </section>
                <section className="coleccion">
                    <h1>Nueva colección 2020</h1>
                </section>
                <section className="flex-models">
                    <img src={Model1} alt="" />
                    <img src={Model2} alt="" />
                    <Link to="/">Comprar</Link>
                </section>
                <section className="envios">
                    <div className="plane"></div>
                    <h1>
                        Envíos gratis a partir de $399 a cualquier parte del
                        mundo
                    </h1>
                </section>
                <section className="sale-items">
                    <div className="item-description">
                        <div
                            className="img"
                            style={{ background: `url(${Sale1})` }}
                        >
                            <p className="sale-label">SALE</p>
                            <button className="agregar">Agregar</button>
                            <button className="vista-rapida">
                                Vista rápida
                            </button>
                        </div>
                        <div className="description">
                            <h3>Mochilas y accesorios</h3>
                            <h1>2020 Edición Limitada</h1>
                            <div className="prices">
                                <h2 className="old-price">$400.00</h2>
                                <h2 className="new-price">$250.00</h2>
                            </div>
                        </div>
                    </div>
                    <div className="item-description">
                        <div
                            className="img"
                            style={{ background: `url(${Sale2})` }}
                        >
                            <p className="sale-label">SALE</p>
                            <button className="agregar">Agregar</button>
                            <button className="vista-rapida">
                                Vista rápida
                            </button>
                        </div>
                        <div className="description">
                            <h3>Mochilas y accesorios</h3>
                            <h1>2020 Edición Limitada</h1>
                            <div className="prices">
                                <h2 className="old-price">$400.00</h2>
                                <h2 className="new-price">$250.00</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="instagram-images">
                    <h1>Sigue a @kittenboutiquepue para inspirarte.</h1>
                    <div className="flex-images">
                        <img src={Insta1} alt="Imagen1" />
                        <img src={Insta2} alt="Imagen1" />
                        <img src={Insta3} alt="Imagen1" />
                        <img src={Insta4} alt="Imagen1" />
                        <img src={Insta5} alt="Imagen1" />
                        <img src={Insta6} alt="Imagen1" />
                        <img src={Insta7} alt="Imagen1" />
                    </div>
                </section>
            </main>
        );
    }
}
