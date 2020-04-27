import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export interface IERProps {
    children: JSX.Element;
    withNavbar: boolean;
    withFooter: boolean;
    path: string;
    exact: boolean;
}

export default class EnhancedRoute extends Component<IERProps> {
    render() {
        const { children, withNavbar, withFooter, path, exact } = this.props;
        return (
            <Route
                path={path}
                exact={exact}
                render={props => (
                    <>
                        {withNavbar && <Navbar />}
                        {children}
                        {withFooter && <Footer />}
                    </>
                )}
            ></Route>
        );
    }
}
