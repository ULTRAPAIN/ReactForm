
// import { useState } from 'react';
import './App.css';
import { useState } from 'react';
import {  toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [formData,setformData]=useState({firstName:"",lastName:"",email:"" ,country:"",streetAddress:"",city:"" ,state:"",postalCode:"", comments:false ,candidates:false ,Offers:false ,pushNotifications:""})
  function changeHandler(event){
    const {name,type,value,checked}=event.target
    setformData((prevData) => {
      return {
        ...prevData,
        [name]:type==="checkbox" ? checked:value

      }
    }
    )
  }
  function submitHandler(event){
    event.preventDefault()
   // Check if any required fields are empty
   const requiredFields = ['firstName', 'lastName', 'email' ,'country' ,'streetAddress','city','state','postalCode' ,'pushNotifications']; // Add other required fields as needed
   const emptyFields = requiredFields.filter(field => !formData[field]);
 
   if (emptyFields.length > 0) {
     // Display a toast notification for empty fields
     toast.error(`Please fill out the following fields: ${emptyFields.join(', ')}`);
   } else {
     // Your form submission logic here
     // For example, sending form data to an API
 
     // Show success toast
     toast.success('Data submitted successfully,Console It!');
     console.log(formData)
   }
    
  }
  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-white shadow-xl rounded-md">
    <form onSubmit={submitHandler} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block font-semibold">First Name</label>
        <input 
          type="text" 
          placeholder="Enter your First Name" 
          value={formData.firstName}
          onChange={changeHandler} 
          name="firstName" 
          id="firstName" 
          className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm "/>
      </div>
  
      <div>
        <label htmlFor="lastName" className="block font-semibold">Last Name</label>
        <input 
          type="text" 
          placeholder="Enter your Last Name" 
          value={formData.lastName}
          onChange={changeHandler} 
          name="lastName" 
          id="lastName" 
          className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm"/>
      </div>
  
      <div>
        <label htmlFor="email" className="block font-semibold">Email Address</label>
        <input 
          type="text" 
          placeholder="Enter your Email Address" 
          value={formData.email}
          onChange={changeHandler} 
          name="email" 
          id="email" 
          className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm"/>
      </div>
  
      <div>
        <label htmlFor="country" className="block font-semibold">Country</label>
        <select 
          name="country" 
          id="country" 
          onChange={changeHandler} 
          value={formData.country}
          className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
        </select>
      </div>
  
      {/* Add more form fields here */}
      <div className="mb-4">
      <label htmlFor="streetAddress" className="block font-semibold" >Street Address</label>
      <input type="text" 
        name="streetAddress" 
        id="streetAddress" 
        placeholder="Enter your Street Address" 
        value={formData.streetAddress}
        onChange={changeHandler} 
        className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm" 
      />
    </div>

    <div className="mb-4">
      <label htmlFor="city" className="block font-semibold">City</label>
      <input 
        type="text" 
        placeholder="Enter your City" 
        value={formData.city}
        onChange={changeHandler} 
        name="city" 
        id="city" 
        className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="state" className="block font-semibold">State / Province</label>
      <input 
        type="text" 
        placeholder="Enter your State / Province" 
        value={formData.state}
        onChange={changeHandler} 
        name="state" 
        id="state" 
        className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="postalCode" className="block font-semibold">Zip / Postal Code</label>
      <input 
        type="tel" 
        placeholder="Enter your Zip / Postal Code" 
        value={formData.postalCode}
        onChange={changeHandler} 
        name="postalCode" 
        id="postalCode" 
        className="mt-1 block w-full px-3 py-2  border-gray-400 border-2 rounded-md shadow-sm"
      />
    </div>

    <div className="mb-4">
      <label className="block font-semibold ">By Email</label>
      <div className='mt-3'>
        <input 
          type="checkbox" 
          onChange={changeHandler} 
          name="comments" 
          checked={formData.comments} 
          id="comments" 
          className="mr-2  h-4 w-4"
        />
        <label htmlFor="comments" className="font-semibold">Comments</label>
        <p className="text-gray-500  px-5 py-1">Get notified when someone posts on a posting</p>
      </div>

      <div>
        <input 
          type="checkbox" 
          onChange={changeHandler} 
          name="candidates" 
          checked={formData.candidates} 
          id="candidate" 
          className="mr-2 h-4 w-4"
        />
        <label htmlFor="candidate" className="font-semibold">Candidates</label>
        <p className="text-gray-500 px-5 py-1">Get notified when someone posts on a posting</p>
      </div>

      <div>
        <input 
          type="checkbox" 
          onChange={changeHandler} 
          name="Offers" 
          checked={formData.Offers} 
          id="offer" 
          className="mr-2  h-4 w-4 "
        />
        <label htmlFor="offer" className="font-semibold">Offers</label>
        <p className="text-gray-500  px-5 py-1">Get notified when someone posts on a posting</p>
      </div>
    </div>

    <div >
      <fieldset>
      <legend className="font-semibold mb-1">Push Notifications</legend>
      <p className="text-gray-500 mb-4">These are delivered via SMS to your mobile phone </p>
    <div className='space-y-4 font-semibold '>
      <input type='radio' id="everything"
      onChange={changeHandler} name="pushNotifications"
      value="Everything" checked={formData.pushNotifications==="Everything"}
      className='h-4 w-4 '/>
      <label htmlFor='everything'  className='ml-2'>Everything</label>
      <br />
      <input type='radio' id="sameAsEmail"
      onChange={changeHandler} name="pushNotifications"
      value="Same as Email" checked={formData.pushNotifications==="Same as Email"} 
      className='h-4 w-4 '/>
      <label htmlFor='sameAsEmail'className='ml-2'>Same as Email</label>
      <br /> 
      <input type='radio' id="noPush"
      onChange={changeHandler} name="pushNotifications"
      value="no Push Notifications" checked={formData.pushNotifications==="no Push Notifications"}
      className='h-4 w-4 '/>
      <label htmlFor='noPush' className='ml-2'>No push Notifications</label>
      </div>
      </fieldset>
    </div>
  
      
  
      <div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>

      </div>
      </form>
      <ToastContainer />
      </div>
  );
}

export default App;
