import logo from './logo.svg';
import './App.css';
/**para la tarea */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CoursePage from './components/CoursePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return ( < Router >
        <
        div >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/cursos/:id"
        element = { < CoursePage / > }
        /> < /
        Routes > <
        Footer / >
        <
        /div> < /
        Router >

    );
}

export default App;