import React, { Component } from "react";
import Model2 from "../../assets/model-2.png";
import "./Articulo.scss";

export default class Articulo extends Component {
    render() {
        return (
            <main id="articulo">
                <section className="definicion-articulo">
                    <div className="item-description">
                        <div
                            className="img"
                            style={{ background: `url(${Model2})` }}
                        >
                            <p className="sale-label">SALE</p>
                            <button className="vista-rapida">
                                Vista rápida
                            </button>
                        </div>
                        <div className="description">
                            <h3>Vestido</h3>
                            <h1>Niña Gata</h1>
                            <div className="prices">
                                <h2 className="old-price">$600.00</h2>
                                <h2 className="new-price">$120.00</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="detalles-articulo">
                    <div className="detalles-description">
                        <h1>Vestido Tipo Animal Print</h1>
                        <h2>$120.00 MXN</h2>
                        <h2>Vestido - 42213/002</h2>
                        <p>Vestido confeccionado con tejido de algodón</p>
                        <div className="ver-mas"></div>
                        <div className="linea"></div>
                        <div className="tallas">
                            <h2>Tallas</h2>
                            <p>46</p>
                            <p>47</p>
                            <p>48</p>
                            <p>49</p>
                            <p>50</p>
                        </div>
                        <div className="linea"></div>
                        <button>Añadir</button>
                    </div>
                </section>
            </main>
        );
    }
}
