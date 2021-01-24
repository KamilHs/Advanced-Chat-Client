import React from "react";
import { AUTH_ROUTES } from "./const";
import { Route, Switch } from "react-router-dom"
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";


export const AuthRoutes: React.FC = () => {
    const render = React.useCallback(
        () => (
            <Switch>
                <Route path={[AUTH_ROUTES.LOGIN, AUTH_ROUTES.MAIN]} component={LoginForm} exact />
                <Route path={AUTH_ROUTES.REGISTER} component={RegisterForm} exact />
            </Switch>
        ), []);
    return <Route path={AUTH_ROUTES.MAIN} render={render} />;
}