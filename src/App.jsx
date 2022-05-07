import React, { Component } from "react";
import './app.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'May 15, 2022',
            newDeadline: ''
        }
    }

    changeDeadline() {
        console.log('state', this.state);
        this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <Form inline="true">
                    <FormControl className="Deadline" onChange={event => this.setState({ newDeadline: event.target.value })} placeholder='Your Date' />
                    <Button onClick={() => this.changeDeadline()}>Set Date</Button>
                </Form>
            </div>
        )
    }
}

export default App;