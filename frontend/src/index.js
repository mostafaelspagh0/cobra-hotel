import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DarkModeProvider from "./features/darkMode/DarkModeProvider";
import {CssBaseline} from "@mui/material";
import {AuthProvider} from "./features/auth/context/AuthContext";
import {BrowserRouter} from "react-router-dom";
import {HrContextProvider} from "./features/hr/context/hrContext";
import {EmailContextProvider} from "./features/mail/context/emailContext";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <BrowserRouter>
            <DarkModeProvider>
                <AuthProvider>
                    <EmailContextProvider>
                        <HrContextProvider>
                            <App/>
                        </HrContextProvider>
                    </EmailContextProvider>
                </AuthProvider>
            </DarkModeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
