import React from "react";
import "./list.css";
import Item from "../item/Item";

const List = ({ budgets, handleDelete, clearAll, handleEdit }) => {
  return (
    <div className="list">
      {budgets.map((budget) => (
        <Item
          key={budget.id}
          budget={budget}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
      <div className="list-delete">
        {budgets.length > 0 ? (
          <button onClick={() => clearAll()}>Xoá hết nợ</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default List;
