import axios from 'axios'
import { Alert } from 'bootstrap'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./SignupPage.css"

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const submit=async (event)=>{
    event.preventDefault();
    if(password!==confirmpassword){
      alert("passwords do not match!")
    }
    else{
      try {
        const config = {
          header:{
              "Content-type":"application/json"
          }
      }
      // setLoading(true)
      const {data}=await axios.post(
          "/api/users",
          {
              name, pic, email, password
          },
          config
      )
      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data))
        
      } catch (error) {
        console.log(error)
      }
    }
    console.log(email)
  }

  return (
    <div className="loginContainer">
      <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event)=>setName(event.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="confirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(event)=>setConfirmPassword(event.target.value)}/>
  </Form.Group>

  {/* <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Profile Picture</Form.Label>
    <Form.Control type="file" placeholder="upload profile picture"/>
  </Form.Group> */}
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to="/login">Already have an account?</Link>
</Form>
    </div>
  )
}

export default SignupPage