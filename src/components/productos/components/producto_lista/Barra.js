import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Barra = ()=>{
    return(
        <Col xs={12}>
            <ButtonToolbar
        className="justify-content-between mb-4"
        aria-label="Toolbar with Button groups"
        >
                <Link to="/Nproducto">
                    <Button variant="primary">Nuevo producto</Button>
                </Link>
                <InputGroup>
                <InputGroup.Text id="btnGroupAddon2">Buscar Producto</InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="ID o Nombre"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon2"
                />
                </InputGroup>
            </ButtonToolbar>
        </Col>
    );
}

export default Barra;