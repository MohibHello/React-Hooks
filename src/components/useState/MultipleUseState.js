import React, { useState } from "react";

function MultipleUseState() {
 const [name, setName] = useState('')
 const [age, setAge] = useState('')
 const [phone, setPhone] = useState('')
 const [address, setAddress] = useState('')


  const handleName = (event) => {
    setName(event.target.value)
  };
  const handleAge = (event) => {
    setAge(event.target.value)
  };
  const handlePhone = (event) => {
    setPhone(event.target.value)
  };
  const handleAddress = (event) => {
    setAddress(event.target.value)
  };

  return (
    <div className="container">
      <h3 className="mt-5 mb-5"> Multiple useState with Object</h3>
      <form>
        <div class="form-group row">
          <label className="col-1 col-form-label" htmlFor="name">
            Name:
          </label>
          <div class="col-auto">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              onChange={handleName}
            />
          </div>
        </div>
        <label for="name">Age:</label>
        <input
          className="form-control mt-2"
          type="number"
          name="age"
          id="age"
          onChange={handleAge}
        />
        <label for="name">phone:</label>
        <input
          className="form-control mt-2"
          type="number"
          name="phone"
          id="phone"
          onChange={handlePhone}
        />
        <label for="name">address:</label>
        <textarea
          className="form-control mt-2"
          type="textarea"
          name="address"
          id="address"
          onChange={handleAddress}
        />
      </form>
      <div>
        <h3>
          Hi, Your name is {name}, {age} Year's old with phone{" "}
          {phone} living in {address}
        </h3>
      </div>
    </div>
  );
}

export default MultipleUseState;
