import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Template = ({title}) => {
  return (
    <div>
        <Container>
            <Row>
                <div>
                    {title && <div><h1>{title}</h1><hr /></div>}
                    </div>
            </Row>
        </Container>
    </div>
  )
}

export default Template