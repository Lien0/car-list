import { Form } from "react-bootstrap";
import Button from "./button";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export default function AddProducts({
  onShowEmoji,
  showEmoji,
  addProduct,
  onClose,
}) {
  const [name, setName] = useState();
  const [emoji, setEmoji] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const id = crypto.randomUUID();

    const newProduct = {
      id,
      name,
      image: emoji,
      cost: null,
      quantity: null,
    };
    addProduct(newProduct);
    setName("");
    setEmoji("");
    onClose();
  }
  return (
    <div className="container p-2 border border-primary border-3 border-opacity-25 shadow rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            <h6>Nombre</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del articulo"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="text-start m-2">
          <Button
            stylo={showEmoji ? "btn bg-secondary bg-opacity-50" : ""}
            click={onShowEmoji}
          >
            Escoge un Emoji
          </Button>
        </div>
        {showEmoji && (
          <Form.Group>
            <img src={emoji} alt="" className="row" />
            <EmojiPicker
              className="row"
              reactionsDefaultOpen={true}
              onEmojiClick={(e) => setEmoji(e.imageUrl)}
            />
          </Form.Group>
        )}
        <div className="text-end">
          <Button
            stylo={
              showEmoji
                ? "btn bg-success bg-opacity-50 border border-success border-5 border-opacity-25"
                : ""
            }
          >
            Agregar
          </Button>
        </div>
      </Form>
    </div>
  );
}
