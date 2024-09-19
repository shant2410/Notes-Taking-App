import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./LandingStyles.css"

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 >Note it down!</h1>
                            <p>One safe place to all your notes.</p>
                        </div>
                        <div>
                            <Link to="/login"><button className='landing-btn'>Login</button></Link>
                            <Link to="/signup"><button className='landing-btn'>SignUp</button></Link>



                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage