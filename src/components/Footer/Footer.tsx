import React, { Component } from "react";
import { Link } from "react-router-dom";
import MasterCard from "../../assets/mastercard.svg";
import PayPal from "../../assets/paypal.svg";
import JCB from "../../assets/jcb.svg";
import Visa from "../../assets/visaa.svg";
import Amazon from "../../assets/amazon.svg";

import "./Footer.scss";

export default class Footer extends Component {
    render() {
        return (
            <main id="footer">
                <section className="grid">
                    <section className="contact-info">
                        <h1>Contact Info</h1>
                        <div className="contacts">
                            <p>
                                <b>Phone:</b>+4 (509) 120 6705
                            </p>
                            <p>
                                <b>Address:</b> 1418 Riverwood Drive, Suite 3245
                                Cottonwood, CA 96052, United State
                            </p>
                        </div>
                        <div className="cards">
                            <p>We accept:</p>
                            <div className="flex-cards">
                                <div
                                    className="card"
                                    style={{
                                        background: `url(${MasterCard})`
                                    }}
                                ></div>
                                <div
                                    className="card"
                                    style={{
                                        background: `url(${JCB})`
                                    }}
                                ></div>
                                <div
                                    className="card"
                                    style={{
                                        background: `url(${PayPal})`
                                    }}
                                ></div>
                                <div
                                    className="card"
                                    style={{
                                        background: `url(${Visa})`
                                    }}
                                ></div>
                                <div
                                    className="card"
                                    style={{
                                        background: `url(${Amazon})`
                                    }}
                                ></div>
                            </div>
                        </div>
                    </section>
                    <section className="get-help">
                        <h1>Get Help</h1>
                        <div className="links">
                            <Link to="/">Delivery Information</Link>
                            <Link to="/">Sale Terms & Conditions</Link>
                            <Link to="/">Returns & Refunds</Link>
                            <Link to="/">Privacy Notice</Link>
                            <Link to="/">Shopping FAQs</Link>
                        </div>
                    </section>
                    <section className="popular-categories">
                        <h1>Popular categories</h1>
                        <div className="links">
                            <Link to="/">Coats *45+</Link>
                            <Link to="/">Jeans (278)</Link>
                            <Link to="/">Tops (64)</Link>
                            <Link to="/">Sweaters (129)</Link>
                            <Link to="/">Coats *45+</Link>
                        </div>
                    </section>
                </section>
                <section className="copyright"></section>
            </main>
        );
    }
}
