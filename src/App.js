import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import PageRoutes from "./PageRoutes";
import Header from "./components/header/Header";
import {AuthContext} from "./context";
import {useEffect} from "react";
import {useContext} from "react";

function App() {
    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setAuth(true)
        }
        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth, loading]}>
            <BrowserRouter>
                <Header/>
                <PageRoutes/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
