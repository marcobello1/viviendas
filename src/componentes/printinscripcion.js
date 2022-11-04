import React from 'react'
import {
    Container, Row, Col
} from 'react-bootstrap'

import Cookies from "universal-cookie";
const ImprimirInscripcionPage = () => {
    const cookies = new Cookies();
    return (
        <Container style={{marginTop: 60}}>
            <Row>
                <Col>
                    <center>
                       <b><h1>¡Listo!</h1></b>
                    </center>
                </Col>
            </Row>
            <Row>
                <Col md={10} style={{textAlign: "center"}}>
                   
                </Col>
            </Row>
            <Container style={{fontSize: 30, textAlign: "center"}}>
                Ya estás inscripto en el Registro Único de Acceso a la Vivienda de la <br />
                Municipalidad de San Nicolás.<br />
                Tu inscripción te permite ser candidato para participar de los próximos<br />
                sorteos de viviendas que realicemos.<br />
                Recordá que previo a cada sorteo, publicaremos los requisitos necesarios<br />
                para acceder.<br />
                Podrás encontrar más información en www.sannicolasciudad.gob.ar
            </Container>
            <br />
            <h2>¡Buena Suerte!</h2>
            <br />
            <Row>
                <Col style={{fontSize: 25, textAlign: "center"}}>
                    Nombre del titular: {cookies.get('nombre')} {cookies.get('apellido')}
                </Col>
            </Row>
            <Row>
                <Col style={{fontSize: 25, textAlign: "center"}}>   
                    DNI: {cookies.get('dni')}
                </Col>
            </Row>
        </Container>
    )
}


export default ImprimirInscripcionPage