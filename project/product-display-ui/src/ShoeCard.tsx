import type { Shoe } from "./types";
import "./ShoeCard.css";
import { useState } from "react";

interface ShoeCardProps {
  shoe: Shoe;
}

const ShoeCard = ({ shoe }: ShoeCardProps) => {
  const [isEdit, setEdit] = useState(false);
  const [shoeState, setShoeState] = useState(shoe);

  const handleClick = () => {
    setEdit(!isEdit);
    setShoeState(shoe);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShoeState({ ...shoeState, size: e.target.value });
  };

  return (
    <div className="shoe-card">
      <h3>{shoe.name}</h3>
      <p>Color: {shoe.color}</p>
      Size:{" "}
      <input
        type="text"
        value={shoeState.size}
        disabled={!isEdit}
        readOnly={!isEdit}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <p className="id-tag">ID: {shoe.id}</p>
      <button onClick={() => handleClick()}>Edit</button>
    </div>
  );
};

export default ShoeCard;
