import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  title: string;
}

function ListGroup({ items, title }: Props) {
  const [index, setIndex] = useState(-1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <ul className="list">
        {items.map((item, i) => (
          <li
            onClick={() => {
              handleClick(i);
            }}
            key={item}
            className={index === i ? "item active" : "item"}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
