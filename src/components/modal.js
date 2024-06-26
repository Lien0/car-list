import { Modal, ModalHeader, Form, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "./button";

export default function CashModal({ modal, onCash, setModal, onModal }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    onCash(value);
    setModal(false);
  }
  return (
    <Modal show={modal} onHide={onModal}>
      <ModalHeader closeButton>
        <Modal.Title>Presupuesto</Modal.Title>
      </ModalHeader>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              onChange={(e) => setValue(Number(e.target.value))}
            ></Form.Control>
            <Button type="submit">Aceptar</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Button click={() => setModal(false)}>
            Continuar sin presupuesto
          </Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
