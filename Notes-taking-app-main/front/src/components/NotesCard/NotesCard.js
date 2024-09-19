import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'

const NotesCard = ({ title, content, category }) => {
    return (
        <div>
            <Accordion>
                <Card style={{ padding: 2 }}>
                    
                        <Card.Header > <span >
                        <Accordion.Header>{title}
                    </Accordion.Header></span>
                            <Button>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                        </Card.Header>
                    <Accordion.Body>
                        <Card.Body>
                            <h6>
                                <Badge varient="success">Category-{category}</Badge>
                            </h6>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {content}
                                </p>
                                <footer className="blockquote-footer">
                                    Category: <cite title="Source Title">{category}</cite>
                                    <br/>
                                    <span>  {Date()}</span>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Accordion.Body>
                </Card>
            </Accordion>
        </div>
    )
}

export default NotesCard