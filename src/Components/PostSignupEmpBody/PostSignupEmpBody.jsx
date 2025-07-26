import React from 'react'
import "./postSignupEmpBody.css"
const PostSignupEmpBody = () => {
  return (
    <div className='postSignupEmpBody'>
        <h1>Personal Information</h1>
        <form action='' className='fullForm'>
            <div className="uploadSection">
                <button>Upload Image</button>
            </div>
            <div className="infoInputPart1">
                <input type="text" placeholder='Full Name' required/>
                <input type="email" placeholder='Email' required/>
                <input type='text' placeholder='Phone Number' required/>
                <input type='text' placeholder='College or University' required/>
                <input type='text' placeholder='Address' required/>
            </div>
            <div className="infoInputPart2">
                <input type='text' placeholder='District' className='district' required/>
                
                <select name="gender" className='selectGen'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="infoInputPart3">
                <input type="text" placeholder='Birthdate eg 30/12/2024' required/>
                <button type='submit'>Next</button>
            </div>
        </form>

    </div>
  )
}

export default PostSignupEmpBody
