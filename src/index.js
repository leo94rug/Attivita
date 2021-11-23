import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Definizione from './definizione.js';
import Registra from './registra.js';
import Associazione from './associazione.js';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import { Provider } from 'react-redux'


import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        page: () => <div >Home</div>
    },
    {
        path: "/registra",
        page: () => <Registra />
    },
    {
        path: "/associazione",
        page: () => <Associazione />
    },
    {
        path: "/definizione",
        page: () => <Definizione />
    }
];
class Page extends React.Component {

    render() {
        return (

            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>

                    <Switch>
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.page}
                            />
                        ))}
                    </Switch>

                    <Link to="/" underlayColor="#f0f4f7">
                        <div>Home</div>
                    </Link>
                    <Link to="/registra" underlayColor="#f0f4f7">
                        <div>Registra</div>
                    </Link>
                    <Link to="/associazione" underlayColor="#f0f4f7">
                        <div>Associazione</div>
                    </Link>
                    <Link to="/definizione" underlayColor="#f0f4f7">
                        <div>Definizione</div>
                    </Link>
                </LocalizationProvider>
            </div>

        );
    }
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Page />
        </Provider> 
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();

