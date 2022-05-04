import React from "react";
import "./form.css";

const Form = ({
  handleName,
  handleAmount,
  name,
  amount,
  handleSubmit,
  edit,
}) => {
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-content">
        <div className="input-form">
          <label htmlFor="name">Nợ gì</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="v.d..tien choi gai"
            onChange={(e) => handleName(e)}
            value={name}
          />
        </div>
        <div className="input-form">
          <label htmlFor="amount">Bao tiền</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="v.d..100000"
            onChange={(e) => handleAmount(e)}
            value={amount}
          />
        </div>
      </div>
      <div className="form-button">
        <button type="submit">{edit ? "Sửa" : "Thêm"}</button>
      </div>
    </form>
  );
};

export default Form;
