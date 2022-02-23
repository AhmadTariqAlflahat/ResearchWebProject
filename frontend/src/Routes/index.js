import {routes} from "./RouteDict";
import {Route} from "react-router-dom";
import React from "react";
import {ProtectedRoute} from "./ProtectedRoute";

export const AllRoute =
        routes.map(({path, Element, auth}, key) =>
            {
                if (auth)
                    return (
                        <Route path={path} element={<ProtectedRoute/>} key={key}>
                            <Route path={path} element={<Element/>} key={key} />
                        </Route>
                    )
                return <Route path={path} element={<Element/>} key={key}/>
            }
        )
