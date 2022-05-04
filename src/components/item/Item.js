import React from "react";
import "./item.css";
import { MdEdit, MdDelete } from "react-icons/md";

const Item = ({ budget, handleDelete, handleEdit }) => {
  const { id, name, amount } = budget;
  return (
    <div className="item">
      <div className="item-name">{name}</div>
      <div className="item-amount">{amount} VNĐ</div>
      <div className="item-btn">
        <button className="item-edit" onClick={() => handleEdit(id)}>
          <MdEdit />
        </button>
        <button className="item=delete" onClick={() => handleDelete(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Item;
