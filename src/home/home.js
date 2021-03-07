import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { withRouter } from "react-router";
import {  Link} from "react-router-dom";

import './home.css';
// import srcImg from '../assets/candyHome.jpg';
export default 
    function Home(props) {
        const { srcImg } = props;

        return (
            <div className="center-home"> 
            <img src={srcImg}/> 
            </div>
        );
    };