import React from 'react'
import "./PostSignupEmpBody2.css"
const PostSignupEmpBody2 = () => {
  return (
    <div className='postSignupEmpBody2'>
      <h1>Skill Information</h1>
      <form action="" className='skillForm'>
        <div className="upload">
          <button>Upload Resume</button>
        </div>
        <div className="texts">
          <h1>Skill: Engineer</h1>
          <h1><span className='summary'>Summary: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rerum dolor minus similique tempora unde asperiores qui nulla sunt tenetur! Tenetur eaque est eum fugiat impedit placeat pariatur vel reprehenderit?</h1>
        </div>
        <div className="experiences">
          <textarea cols={60} rows={10} placeholder='Experience with duration'></textarea>
        </div>
        <div className="buttons">
          <button>back</button>
          <button>Get Started</button>
        </div>

      </form>
    </div>
  )
}

export default PostSignupEmpBody2
