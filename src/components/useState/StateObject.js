import React, { useState } from "react";

function StateObject() {
  const [state, setState] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    console.log([event.target.name]);
    setState({ ...state, [event.target.name]: event.target.value });
  };


  
  return (
    <div className='container'>
        <h3 className='mt-5 mb-5'>useState with Object</h3>
      <form >
        <div class="form-group row">
        <label className='col-1 col-form-label' htmlFor="name">Name:</label>
        <div class="col-auto">
        <input className='form-control' type="text" name="name" id="name" onChange={handleChange} />
        </div>
        </div>
        <label for="name">Age:</label><input className='form-control mt-2' type="number" name="age" id="age" onChange={handleChange} />
        <label for="name">phone:</label>
        <input
        className='form-control mt-2'
          type="number"
          name="phone"
          id="phone"
          onChange={handleChange}
        />
        <label for="name">address:</label>
        <textarea
        className='form-control mt-2'
          type="textarea"
          name="address"
          id="address"
          onChange={handleChange}
        />
      </form>
      <div>
        <h3>
          Hi, Your name is {state.name}, {state.age} Year's old with phone{" "}
          {state.phone} living in {state.address}
        </h3>
      </div>
    </div>
  );
}

export default StateObject;
