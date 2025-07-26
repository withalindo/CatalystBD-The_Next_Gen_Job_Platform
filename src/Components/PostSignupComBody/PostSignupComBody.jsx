import React from 'react'
import "./PostSignupComBody.css"
const PostSignupComBody = () => {
  return (
    <div className='postSignupComBody'>
        <h1>Company Information</h1>
        <form action="" className='postSignupForm'>
            <div className="pictureSec">
                <button>Upload Image</button>
            </div>
            <div className="inputSec">
                <input type="text" placeholder='Comapnay Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone Number'/>
                <input type="text" placeholder='Address'/>
                <input type="text" placeholder='District'/>
            </div>
            <div className="textBoxSec">  
              <textarea cols={60} rows={10} placeholder='Company Description'></textarea>
              <button>Get Started</button>
            </div>
        </form>
    </div>
  )
}

export default PostSignupComBody
