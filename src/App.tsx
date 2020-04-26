import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import "./App.scss";

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading</div>}>
                <ScrollToTop>
                    <Switch></Switch>
                </ScrollToTop>
            </Suspense>
        </Router>
    );
}

export default App;
