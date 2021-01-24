import React from "react";
import { Route } from "react-router-dom";

import { Inbox } from "../components/index"
import { HOME_ROUTES } from "./const";


export const HomeRoutes: React.FC = () => {
    return <Route path={[HOME_ROUTES.MAIN, HOME_ROUTES.INBOX]} component={Inbox} />;
}