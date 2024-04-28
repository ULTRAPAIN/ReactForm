
import { useState } from 'react';
import './App.css';

function App() {
  const [formData,setformData]=useState({firstName:"",lastName:"",email:"",Message:"" ,check:true ,mode:"" ,favCar:""})
  function changeHandler(event){
    const {name,value,type,checked} = event.target
    setformData((prevData)=>{
      return {
        ...prevData,
        [name]:type==="checkbox" ?checked:value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault()
    console.log("Printing the Form Data....")
    console.log(formData)
  }
  return (
   <div>
    <form onSubmit={submitHandler}>
    <input type="text" placeholder='First Name'
      name='firstName' onChange={changeHandler} required value={formData.firstName}/>
      <br/>
    <input type="text" placeholder='Last Name'
    name='lastName' onChange={changeHandler}
    value={formData.lastName} required/>
    <br/>
   <input type='email' placeholder='Email'
   name='email' onChange={changeHandler} 
   value={formData.email}required/>
   <br/>
   <br/>
   <textarea placeholder=' Enter your Message'
   name='Message' onChange={changeHandler} value={formData.Message}required/>
    <br/>
    <label htmlFor='check'>Am I visible?</label>
    <input type='checkbox' onChange={changeHandler} name="check" checked={formData.check}/>
    <br/>
    <br/>
    <input type="radio" onChange={changeHandler} name="mode"
    value="online-mode" id="online-mode"
    checked={formData.mode==="online-mode"}/>
    <label htmlFor='online-mode'>Online-mode</label>
    <input type="radio" onChange={changeHandler} name="mode"
    value="offline-mode" id="offline-mode"
    checked={formData.mode==="offline-mode"}/>
    <label htmlFor='offline-mode'>Offline-mode</label>

    <label htmlFor='favCar'>Tell me your Favourite car</label>
    <select id="favCar"
    name='favCar' 
    onChange={changeHandler}
value={formData.favCar}>
  <option value="Scorpio">Scorpio</option>
  <option value="Thar">Thar</option>
  <option value="legender">legender</option>

</select>
<button>submit</button>
</form>
   </div>
  );
}

export default App;
