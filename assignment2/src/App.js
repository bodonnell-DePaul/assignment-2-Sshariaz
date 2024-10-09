/*sharia zainab*/
import React from 'react';
import './App.css';
import ToDoList from './ToDoList'; // Import the new component
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment 2: Omer's ToDo List</h1>
      </header>
      <Container>
        <Row>
          <Col sm={8}> {/* ToDo list on the right */}
            <ToDoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;