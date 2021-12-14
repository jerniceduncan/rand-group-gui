import React, { useState } from "react";
import "./addApprentice.css";
import axios from "axios";

const AddApprentice = () => {
  const [form, setForm] = useState({ name: "", leadID: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <form className="addForm" onSubmit={onSubmit}>
          <h3 className="add-header">Add Student</h3>
          <input
            onChange={onChange}
            name="name"
            className="input"
            placeholder="Apprentice Name"
          />
          <input
            onChange={onChange}
            name="leadID"
            className="input"
            placeholder="Teacher ID"
          />
          <button className="addBtn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddApprentice;
