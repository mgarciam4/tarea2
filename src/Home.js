import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const courses = [
        { id: 1, title: 'Algoritmos', description: 'En este curso se obtienen las base para la programación, desarrollando lógica y así crear aplicaciones cotidianas.' },
        { id: 2, title: 'Programación 1', description: 'En este curso se aprende las bases de la programación' },
        { id: 3, title: 'Programación 2', description: 'El curso de programación 2 es la continuidad de la programación 1 dónde se aprende más de las bases de la programación' },
        { id: 4, title: 'Redes', description: 'El curso de redes se enseña las topologias de red que hay en la vida cotidiana' },
        { id: 5, title: 'Base de datos', description: 'En este curso se enseñan diferentes gestores de base de datos para enlazar las base de datos con el software' },
    ];

    return ( <
        Container >
        <
        h1 className = "text-center my-4" > Bienvenido a los Cursos < /h1> <
        Carousel className = "mb-4" >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://via.placeholder.com/800x400"
        alt = "Curso 1" / >
        <
        Carousel.Caption >
        <
        h3 > Curso 1 < /h3> <
        p > Algoritmos < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://via.placeholder.com/800x400"
        alt = "Curso 2" / >
        <
        Carousel.Caption >
        <
        h3 > Curso 2 < /h3> <
        p > Programación 1 < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://via.placeholder.com/800x400"
        alt = "Curso 3" / >
        <
        Carousel.Caption >
        <
        h3 > Curso 3 < /h3> <
        p > Programación 2 < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://via.placeholder.com/800x400"
        alt = "Curso 4" / >
        <
        Carousel.Caption >
        <
        h3 > Curso 4 < /h3> <
        p > Redes < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://via.placeholder.com/800x400"
        alt = "Curso 5" / >
        <
        Carousel.Caption >
        <
        h3 > Curso 5 < /h3> <
        p > Base de datos < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        /Carousel>

        <
        Row > {
            courses.map(course => ( <
                Col key = { course.id }
                sm = { 4 } >
                <
                Card className = "mb-4" >
                <
                Card.Body >
                <
                Card.Title > { course.title } < /Card.Title> <
                Card.Text > { course.description } < /Card.Text> <
                Button variant = "primary"
                as = { Link }
                to = { `/cursos/${course.id}` } >
                Ver Curso <
                /Button> <
                /Card.Body> <
                /Card> <
                /Col>
            ))
        } <
        /Row> <
        /Container>
    );
};

export default Home;