import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../modules/Auth';
import { HomeRoutes } from "../modules/Home"

export const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/">
            <AuthRoutes />
            <HomeRoutes />
        </Route>
    </BrowserRouter>
);
