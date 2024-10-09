/*name:sharia zainab*/
import React from 'react';
import { ListGroup, Tab, Container, Row, Col, Form, Button } from 'react-bootstrap';
import todoItems from './todoItems';

const ToDoList = () => {

    return (
        <Container>
            <Row>
                {/* Left column with the form */}
                <Col sm={4}>
                    <div className="form-container"> {/* Form styling */}
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>ToDo Item</Form.Label>
                                <Form.Control type="text" placeholder="Add todo item" />
                            </Form.Group>

                            <Form.Group controlId="formDueDate">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Add ToDo
                            </Button>
                        </Form>
                    </div>
                </Col>

                {/* Right column with the ToDo list */}
                <Col sm={8}>
                    <Tab.Container>
                        <Row>
                            <Col sm={4}>
                                <ListGroup>
                                    {todoItems.map((item, index) => (
                                        <ListGroup.Item
                                            key={index}
                                            action
                                            href={`#${item.title}`}
                                            eventKey={item.title}
                                            variant={getVariant(item.dueDate)} // Color-coding based on date
                                        >
                                            {item.title}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    {todoItems.map((item, index) => (
                                        <Tab.Pane key={index} eventKey={item.title}>
                                            <h3 contentEditable>{item.description}</h3>
                                            <input type="date" defaultValue={item.dueDate} />
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
};

// Helper function for color coding
const getVariant = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate); // Parse the due date

    // Set times to 00:00:00 for today and due date to only compare date (not time)
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    const diffTime = due - today;  // Difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  // Convert to days

    if (diffDays > 7) return 'primary';    // More than 7 days = 'primary'
    if (diffDays <= 7 && diffDays > 4) return 'success'; // 7 to 4 days = 'success'
    if (diffDays <= 4 && diffDays > 2) return 'warning';  // 4 to 2 days = 'warning'
    return 'danger'; // Less than 2 days = 'danger'
};


export default ToDoList;