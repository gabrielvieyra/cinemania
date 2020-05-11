import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Bebidas from './Bebidas';

const AcordeonCandy = (props) => {

    return (
        <Accordion className="mb-2">
            <Card>

                <Card.Header className="p-2">
                    <Accordion.Toggle className="title m-0 font-weight-normal px-2 py-0" as={Button} variant="none" eventKey="0">
                        {props.categoria}
                    </Accordion.Toggle>
                </Card.Header>

                <Container>
                    <Accordion.Collapse eventKey="0">
                        <Row>

                            <Bebidas />

                        </Row>
                    </Accordion.Collapse>
                </Container>
            
            </Card>
        </Accordion>
    )
}

export default AcordeonCandy;

                