import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
import ScrollToTop from "react-router-scroll-top";
import "./App.scss";

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading</div>}>
                <ScrollToTop>
                    <Switch>
                        <EnhancedRoute
                            path="/"
                            withNavbar={true}
                            withFooter={true}
                            exact={true}
                        >
                            <div></div>
                        </EnhancedRoute>
                    </Switch>
                </ScrollToTop>
            </Suspense>
        </Router>
    );
}

export default App;
