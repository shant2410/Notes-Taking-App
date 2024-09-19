import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../screens/LandingPage/LandingStyles.css'

const Footer = () => {
  return (
    <footer
    style={{
      width: "100%",
      maxHeight: window.innerHeight,
      position: "relative",
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      backgroundColor: "darkgray"
      // backgroundColor: "whitesmoke"
    }}
  >
    <Container>
      <Row>
        <Col className="text-center py-3">Copyright &copy; Note it down</Col>
      </Row>
    </Container>
  </footer>
    
  )
}

export default Footer