import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <main id="navbar">
                <section className="logo"></section>
                <section className="links"></section>
                <section className="search"></section>
                <section className="heart"></section>
                <section className="cart"></section>
            </main>
        );
    }
}
