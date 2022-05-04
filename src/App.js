import "./App.css";
import { Form, List, Alert } from "./components/index";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const initialBudgets = localStorage.getItem("budgets")
  ? JSON.parse(localStorage.getItem("budgets"))
  : [];

function App() {
  const [budgets, setBudgets] = useState(initialBudgets);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [alert, setAlert] = useState({ show: false });

  const handleEdit = (id) => {
    let budget = budgets.find((item) => item.id === id);
    let { name, amount } = budget;
    setName(name);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleAlert = (type, text) => {
    setAlert({ show: true, type: type, text: text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1500);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && amount > 0) {
      if (edit) {
        let tempBudgets = budgets.map((item) => {
          return item.id === id ? { ...item, name, amount } : item;
        });
        setBudgets(tempBudgets);
        setEdit(false);
        handleAlert("save", "Đã edit thành công");
      } else {
        setBudgets([...budgets, { id: uuidv4(), name: name, amount: amount }]);
        handleAlert("save", "Lại nợ nữa à:))");
      }
    } else {
      handleAlert("danger", "không được bỏ trống tên hoặc số tiền");
    }
    setAmount("");
    setName("");
  };

  const handleDelete = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
    setAmount("");
    setName("");
    handleAlert("save", "đã xoá món nợ này");
  };

  const clearAll = () => {
    setBudgets([]);
    setAmount("");
    setName("");
    handleAlert("save", "Wow bạn đã hết nợ :))");
  };

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  return (
    <div className="App">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="container">
        <h1>App Tính Nợ :))</h1>
        <Form
          handleName={handleName}
          handleAmount={handleAmount}
          name={name}
          amount={amount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          budgets={budgets}
          handleDelete={handleDelete}
          clearAll={clearAll}
          handleEdit={handleEdit}
        />
        <h1>
          Tổng số nợ là:{" "}
          <span>
            {`${budgets.reduce((total, bud) => {
              return (total += parseInt(bud.amount));
            }, 0)} VNĐ`}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
