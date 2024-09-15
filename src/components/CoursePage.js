import React from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, ListGroup, Table, Container } from 'react-bootstrap';

const CoursePage = () => {
    const { id } = useParams();

    const courseDetails = {
        1: {
            title: 'Algoritmos',
            classes: [
                { name: 'Introducción', description: 'Descripción de Introducción' },
                { name: 'Diagrama de flujo', description: 'Descripción de Diagrama de flujo' },
                { name: 'Estados', description: 'Descripción de Estados' },
                { name: 'Psint', description: 'Descripción de Psint' },
                { name: 'Resolución de problemas', description: 'Descripción de Resolución de problemas' },
            ],
        },
        2: {
            title: 'Programación 1',
            classes: [
                { name: 'Introducción', description: 'Descripción de Introducción' },
                { name: 'If', description: 'Descripción de If' },
                { name: 'For', description: 'Descripción de For' },
                { name: 'While', description: 'Descripción de While' },
                { name: 'Switch', description: 'Descripción de Switch' },
            ],
        },
        3: {
            title: 'Programación 2',
            classes: [
                { name: 'Introducción', description: 'Descripción de Introducción' },
                { name: 'Arreglos', description: 'Descripción de Arreglos' },
                { name: 'Matrices', description: 'Descripción de Matrices' },
                { name: 'Texto plano', description: 'Descripción de Texto plano' },
                { name: 'POO', description: 'Descripción de POO' },
            ],
        },
        4: {
            title: 'Redes',
            classes: [
                { name: 'Introducción', description: 'Descripción de Introducción' },
                { name: 'Topologías', description: 'Descripción de Topologías' },
                { name: 'Cables UTP', description: 'Descripción de Cables UTP' },
                { name: 'VLANs', description: 'Descripción de VLANs' },
                { name: 'IPs', description: 'Descripción de IPs' },
            ],
        },
        5: {
            title: 'Base de datos',
            classes: [
                { name: 'Introducción', description: 'Descripción de Introducción' },
                { name: 'BD Relacional', description: 'Descripción de BD Relacional' },
                { name: 'BD No relacional', description: 'Descripción de BD No relacional' },
                { name: 'DML', description: 'Descripción de DML' },
                { name: 'DDL', description: 'Descripción de DDL' },
            ],
        },
    };

    const course = courseDetails[id];

    return ( <
        Container >
        <
        h2 className = "my-4" > { course.title } < /h2>

        <
        Accordion defaultActiveKey = "0"
        className = "mb-4" > {
            course.classes.map((classItem, index) => ( <
                Accordion.Item eventKey = { index.toString() }
                key = { index } >
                <
                Accordion.Header > { classItem.name } < /Accordion.Header> <
                Accordion.Body > { classItem.description } <
                /Accordion.Body> <
                /Accordion.Item>
            ))
        } <
        /Accordion>

        <
        h3 > Puntos Clave < /h3> <
        ListGroup >
        <
        ListGroup.Item > Punto clave 1 < /ListGroup.Item> <
        ListGroup.Item > Punto clave 2 < /ListGroup.Item> <
        ListGroup.Item > Punto clave 3 < /ListGroup.Item> <
        /ListGroup>

        <
        h3 className = "mt-4" > Tabla de Contenidos < /h3> <
        Table striped bordered hover >
        <
        thead >
        <
        tr >
        <
        th > # < /th> <
        th > Tema < /th> <
        th > Descripción < /th> <
        /tr> <
        /thead> <
        tbody > {
            course.classes.map((classItem, index) => ( <
                tr key = { index } >
                <
                td > { index + 1 } < /td> <
                td > { classItem.name } < /td> <
                td > { classItem.description } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /Table> <
        /Container>
    );
};

export default CoursePage;