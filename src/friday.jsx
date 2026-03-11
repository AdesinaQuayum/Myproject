import React, { useState } from 'react'
import Meeting from "./assets/meeting.png"
import Google from "./assets/Google.png"
import Facebook from "./assets/Facebook.png"


function Friday() {

// const [Type, setType] =useState("")

// const Types = (e) => {
//   setType(e.target.value)
// }

// const Input = (e) => {
//   console.log(e.target.value)
// }

  return (
    <div className='flex flex-row'>
      <div className="bg-blue-950 w-1/2 h-1/2  ">
          <h1 className='text-white py-7 px-25 text-3xl'>Stay on top of <br /> time tracking</h1>
          <img src={Meeting}  className='h-100 object-cover' />
      </div>
      <div className="w-1/2 h-132 bg-white rounded-l-xl  "> 
      <h1>Create Account</h1> <br />

      <div className="flex flex-row gap-5 py-5 px-5">
          <div class="relative w-80">
  <label class="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-600">
    First Name
  </label>
  <input
    type="text"
    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"

    // onChange={(e)=>{
    //   Types(e);
    //   Input(e);
    // }}
  />
  {/* <p>The user typed {Type}</p> */}
</div>

<div class="relative w-80">
  <label class="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-600">
    Last Name
  </label>
  <input
    type="text"
    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
  />
</div>
      </div>
      <div class="relative w-160 py- px-5">
  <label class="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-600">
    Email
  </label>
  <input
    type="text"
    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
  />
</div> <br />

  <div class="relative w-160 py- px-5">
  <label class="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-600">
    Password
  </label>
  <input
    type="text"
    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
  />
</div>

<button className='text-white bg-black w-160 py-3 px-5 mt-5 '>
  Create Account
</button>
<p className='py-5 px-5'>Already have an account? Login</p>
<div className="flex flex-row gap-5">
  <img src={Google} alt=""  className='ms-5'/>
<button className='text-black bg-white w-80 py-3 px-5 mt-5 '> 
  Sign up with Google
</button>
<img src={Facebook}  alt="" className='' />
<button className='text-black bg-white w-80 py-3 px-5 mt-5'> 
 Sign up with Facebook
</button>
</div>

      </div>
      
    </div>
  )
}

export default Friday
