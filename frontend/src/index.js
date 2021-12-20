import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToggleColorMode from "./features/theme/ToggleColorMode";
import {CssBaseline} from "@mui/material";
import {AuthProvider} from "./features/auth/AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ToggleColorMode>
                <CssBaseline/>
                <App/>
            </ToggleColorMode>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
