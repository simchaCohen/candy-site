import React from 'react';

import {  Link} from "react-router-dom";

import './route-app.css';
export default 
    function RouteApp(props) {
        // const { history } = props;

        return (
                <ul className="raute">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/manager/candy">Candy</Link></li>
                    <li><Link to="/client/show-candy">Show Candy</Link></li>
                </ul>
        );
    };