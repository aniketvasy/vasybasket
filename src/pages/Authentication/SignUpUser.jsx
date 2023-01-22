import {signUpUser} from "../../auth/firebaseSignUpAndSignIn"
import React, { useState } from 'react'

const SignUpUser = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const register = (e) =>{
    e.preventDefault();
    signUpUser(email,password)
  }

  return (
    <div className="signup-user-comp">
      <form onSubmit={register}>
      <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
        
    </div>
  )
}

export default SignUpUser;