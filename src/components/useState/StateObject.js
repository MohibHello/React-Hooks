import React, { useState } from "react";

function StateObject() {
  const [state, setState] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    anotherObject: {
      city: "",
      pin: "",
      yetAnotherObject:{
          streetNo:'',
          houseNo:''
      }
    },
  });

  const handleChange = (event) => {
    console.log([event.target.name]);

    //copy remaining attributes {Name:Value} and update the one which event triggers
    /*
    ...state will copy all value eg: name:'mohib',age:'23',phone:'5655',address''
    now u want to change address then it will update update and remaining value remain same not undefined
    */
    setState({ ...state, [event.target.name]: event.target.value });
  };


  //setting state for inner/nested object i.e., anotherObject
  const handleAnotherObjectChange =(event) =>{
      //do ...state to copy outer state {N:V}
      //and for inner object like anotherObject:{ here again copy remaining value by doing ...state.anotherObject
      // if it has more than one {N:V} and update as shown below }
      setState(
          {...state,anotherObject:{
            ...state.anotherObject,[event.target.name]: event.target.value
          }}
      )
  }

 //setting state for inner-of-inner nested object i.e., yetAnotherObj
 const handleYetAnotherObjectChange =(event) =>{
    setState(
        {...state,anotherObject:{
            yetAnotherObject:{
                ...state.anotherObject.yetAnotherObject,[event.target.name]: event.target.value 
            }
          }}
    )
}



  return (
    <div className="container">
      <h3 className="mt-5 mb-5">useState with Object</h3>
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
              onChange={handleChange}
            />
          </div>
        </div>
        <label for="name">Age:</label>
        <input
          className="form-control mt-2"
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
        />
        <label for="name">phone:</label>
        <input
          className="form-control mt-2"
          type="number"
          name="phone"
          id="phone"
          onChange={handleChange}
        />
        <label for="name">address:</label>
        <textarea
          className="form-control mt-2"
          type="textarea"
          name="address"
          id="address"
          onChange={handleChange}
        />
        <input
          className="form-control mt-2"
          type="text"
          name="city"
          id="city"
          placeholder='city'
          onChange={handleAnotherObjectChange}
        />
        <input
          className="form-control mt-2"
          type="number"
          name="pin"
          id="pin"
          placeholder='pincode'
          onChange={handleAnotherObjectChange}
        />
        <input
          className="form-control mt-2"
          type="number"
          name="streetNo"
          placeholder='street number'
          onChange={handleYetAnotherObjectChange}
        />
        <input
          className="form-control mt-2"
          type="number"
          name="houseNo"
          placeholder='House number'
          onChange={handleYetAnotherObjectChange}
        />
      </form>
      <div>
        <h3>
          Hi, Your name is {state.name}, {state.age} Year's old with phone 
          {state.phone} living in {state.address} with city {state.anotherObject.city} with pin: {state.anotherObject.pin}
          with streetNo {state.anotherObject.yetAnotherObject.streetNo} and houseNo is{state.anotherObject.yetAnotherObject.houseNo}
        </h3>
      </div>
    </div>
  );
}

export default StateObject;
