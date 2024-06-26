import { Container, Row, Col } from "react-bootstrap";

export default function Feet({ total, cash }) {
  return (
    <Container>
      <Row>
        <Col>Presupuesto: ${cash}</Col>
        <Col>Total: ${total} </Col>
        <Col>Disponible: ${cash - total} </Col>
      </Row>
    </Container>
  );
}
