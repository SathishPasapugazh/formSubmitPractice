import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [submit, setSubmit]= useState("");

function handleChange(event){
const {name, value}= event.target;

//console.log(name);

setContact(preValue=>{
  if(name==="fName"){
    return {...preValue, fName: value }
  }else if (name==="lName"){
    return {...preValue, lName: value}
  }else if(name==="email"){
    return{...preValue, email: value}
  }
}

)

}

function handleSubmit(event){
setSubmit(contact);
  event.preventDefault();
}


//console.log(event.target);




  return (
    <div className="container">
      <h1>
        Hello {submit.fName} {submit.lName}
      </h1>
      <p>{submit.email}</p>
      <form>
        <input onChange={handleChange} value={submit.fname} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={submit.lname} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={submit.email} name="email" placeholder="Email" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
