import React, { useState, useEffect } from "react";

const Forms = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    country: "",
    accepted: false,
    submited: false,
  });
  const { email, name, password, country, accepted, submited } = values;
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, submited: true });
  };
  const display = () => {
    return (
      submited && (
        <div>
          <h1>{name}</h1>
          <p>{`you have created your account with ${email} thank you`}</p>
        </div>
      )
    );
  };
  return (
    <>
      {display()}
      <div className='adder'>
        <form className='form'>
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
          />
          <br />
          <input
            type='text'
            value={name}
            placeholder='name'
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
          />
          <br />
          <input
            type='password'
            value={password}
            placeholder='password'
            onChange={(e) => {
              setValues({ ...values, password: e.target.value });
            }}
          />
          <br />
          <select
            value={country}
            onChange={(e) => {
              setValues({ ...values, country: e.target.value });
            }}
          >
            <option key='india'>India</option>
            <option key='usa'>Usa</option>
            <option key='chia'>China</option>
            <option key='germenay'>Germany</option>
          </select>
          <br />
          <input
            type='radio'
            value={accepted}
            onChange={(e) => {
              setValues({ ...values, accepted: true });
            }}
          />
          <br />
          <button onClick={hanldeSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Forms;
