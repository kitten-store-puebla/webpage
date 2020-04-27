import React, { Component } from "react";
import Img1 from "../../assets/carrusel-imagen.png";
import Model1 from "../../assets/model-1.png";
import Model2 from "../../assets/model-2.png";
import Model3 from "../../assets/Model3.png";
import Sale1 from "../../assets/sale-1.png";
import Sale2 from "../../assets/sale-2-alt.png";
import Insta1 from "../../assets/outfit-1.png";
import Insta2 from "../../assets/outfit-2.png";
import Insta3 from "../../assets/outfit-3.png";
import Insta4 from "../../assets/outfit-4.png";
import Insta5 from "../../assets/outfit-5.png";
import Insta6 from "../../assets/outfit-6.png";
import Insta7 from "../../assets/outfit-7.png";
import Michi from "../../assets/michi.png";
import { ReactComponent as Recogida } from "../../assets/recogida.svg";
import { ReactComponent as Devolucion } from "../../assets/devolucion.svg";
import { ReactComponent as Candado } from "../../assets/candado.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { ReactComponent as LogoFacebook } from "../../assets/facebook.svg";
import { ReactComponent as LogoInsta } from "../../assets/logo-instagram.svg";
import { ReactComponent as LogoTwitter } from "../../assets/logo-twitter.svg";
import { ReactComponent as LogoWA } from "../../assets/whatsapp.svg";

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
                <section className="social-media">
                    <div className="linea"></div>
                    <div className="social-media-flex">
                        <a href="https://www.instagram.com">
                            <LogoInsta /> Instagram
                        </a>
                        <a href="https://www.twitter.com">
                            <LogoTwitter /> Twitter
                        </a>
                        <a href="https://www.facebook.com">
                            <LogoFacebook /> Facebook
                        </a>
                        <a href="https://www.whatsapp.com">
                            <LogoWA /> WhatsApp
                        </a>
                    </div>
                </section>
                <section className="info-text">
                    <div className="text">
                        <h1>Titulo</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>
                    <img src={Model3} alt="Modelo Kitten" />
                    <div className="mask"></div>
                </section>
                <section className="coleccion">
                    <h1>¡Tu lugar favorito para la ropa de moda esta aquí!</h1>
                </section>
                <section className="mailing-list">
                    <img src={Michi} alt="" />
                    <div className="modal-container">
                        <div className="modal">
                            <h1>Mantengámonos en contacto</h1>
                            <p>
                                Disfrute de un 15% de descuento en su primer
                                pedido cuando se una a nuestra lista de correo.
                            </p>
                            <div className="flex-input">
                                <input
                                    type="text"
                                    placeholder="Ingresa email"
                                />
                                <button>Suscribirse</button>
                            </div>
                            <p>
                                Respetamos su privacidad, por lo que nunca
                                compartimos su información.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="servicio">
                        <Recogida />
                        <h1>Recogida en cualquier tienda</h1>
                        <p>Envío gratis en pedidos superiores a $65</p>
                    </div>
                    <div className="separador"></div>
                    <div className="servicio">
                        <Devolucion />
                        <h1>Devoluciones Gratis</h1>
                        <p>Tienes 30 días.</p>
                    </div>
                    <div className="separador"></div>
                    <div className="servicio">
                        <Candado />
                        <h1>Pagos garantizados</h1>
                        <p>Aceptamos todas las tarjetas</p>
                    </div>
                    <div className="separador"></div>
                    <div className="servicio">
                        <Question />
                        <h1>Servicio al cliente</h1>
                        <p>Primera clase</p>
                    </div>
                </section>
            </main>
        );
    }
}
