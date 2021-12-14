import React, { useState } from "react";
import "./addApprentice.css";
import axios from "axios";
import { toast } from "react-toastify";

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
        setForm({ ...form, name: "" });
        if (res.data.name !== undefined)
          toast.success(`${res.data.name} was successfully added`);
        else toast.error(res.data.msg.message);
      })
      .catch((err) => {
        console.log("error ===>", err);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <form className="addForm" onSubmit={onSubmit}>
          <h3 className="add-header">Add Apprentice</h3>
          <input
            onChange={onChange}
            value={form.name}
            name="name"
            className="input"
            placeholder="Apprentice Name"
          />
          <input
            onChange={onChange}
            value={form.leadID}
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
