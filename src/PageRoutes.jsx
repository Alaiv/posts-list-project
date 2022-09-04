import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./components/routes/Routes";
import {AuthContext} from "./context";
import PreLoader from "./components/UI/Loader/PreLoader";

const PageRoutes = () => {
    const [auth, setAuth, loading] = useContext(AuthContext)
    if(loading) {
        return <PreLoader/>
    }
    let route = auth ? privateRoutes : publicRoutes
    return (
        <div>
            <Routes>
                {route.map(el => <Route key={el.path} path={el.path} element={el.element}/>)}
            </Routes>
        </div>
    );
};

export default PageRoutes;