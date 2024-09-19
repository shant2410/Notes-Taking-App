import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Template from '../../components/Template/Template'

const LoginPage = () => {
    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })
    const fillEmail=(event)=>{
        const eml= event.target.value;
        setuserData(prev=>{
           return {...prev,email:eml}
        })
    }
    const fillPassword=(event)=>{
        const pass= event.target.value;
        setuserData(prev=>{
           return {...prev,password:pass}
        })
    }
    const submit=async (event)=>{
        event.preventDefault();
        console.log(userData.email, userData.password)
        setuserData({email:"",password:""})

        try {
            const config = {
                header:{
                    "Content-type":"application/json"
                }
            }
            // setLoading(true)
            const {data}=await axios.post(
                "/api/users/login",
                {
                    email: userData.email,
                    password:userData.password,
                },
                config
            )
            console.log(data)
            localStorage.setItem('userInfo', JSON.stringify(data))
            // setLoading(false)
        } catch (error) {
            // setError(error.response.data.message)
            console.log(error)
        }
    }
  return (
    <div>
        <Template title={"LoginPage"} />
        <Form onSubmit={submit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={userData.email}
    onChange={fillEmail} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={userData.password}
    onChange={fillPassword}/>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  <Link to="/signup"> Don't have an account?</Link>
</Form>
    </div>
  )
}

export default LoginPage