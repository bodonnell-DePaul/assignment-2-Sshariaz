//sharia zainab
import React, { useState } from 'react';
import { ListGroup, Tab, Row, Col, Container, Form, Button } from 'react-bootstrap';
import todos from './todoItems';

const TodoList = () => {
    const [activeTab, setActiveTab] = useState('0');

    const handleSelect = (key) => setActiveTab(key);

    const getVariant = (dueDate) => {
        const currentDate = new Date();
        const dueDateObj = new Date(dueDate);
        const diffTime = dueDateObj - currentDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 7) return 'primary';
        if (diffDays <= 7 && diffDays > 4) return 'success';
        if (diffDays <= 4 && diffDays > 2) return 'warning';
        return 'danger';
    };

    return (
        <Container>
            <h1>Assignment 2: Sharia Zainab's ToDo List</h1>
            <Form>
                <Form.Group controlId="todoTitle">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" placeholder="Add todo item" />
                </Form.Group>
                <Form.Group controlId="todoDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Todo
                </Button>
            </Form>

            <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {todos.map((todo, index) => (
                                <ListGroup.Item
                                    action
                                    eventKey={index.toString()}
                                    key={index}
                                    variant={getVariant(todo.dueDate)}
                                >
                                    {todo.title}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {todos.map((todo, index) => (
                                <Tab.Pane eventKey={index.toString()} key={index}>
                                    <h3>{todo.title}</h3>
                                    <p contentEditable>{todo.description}</p>
                                    <input type="date" defaultValue={todo.dueDate} />
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default TodoList;
