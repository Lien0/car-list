import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import Button from "./button";

export default function EditProducts({
  onCost,
  onClose,
  selectProduct,
  onDelete,
}) {
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!cost || !quantity) return;

    onCost(cost, quantity);
    setCost(0);
    setQuantity(0);
    onClose(null);
  }

  return (
    <Col>
      <h2>
        <img src={selectProduct.image} alt="" /> {selectProduct.name}
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="¿Cuánto cuesta?"
            onChange={(e) => setCost(Number(e.target.value))}
          ></Form.Control>
          <Form.Control
            type="text"
            placeholder="Cantidad"
            onChange={(e) => setQuantity(Number(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Form.Control
          type="text"
          disabled
          value={cost * quantity}
        ></Form.Control>
        <Button>Agregar</Button>
      </Form>
      <Button click={() => onDelete(selectProduct)}>Eliminar</Button>
    </Col>
  );
}
