import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class AdminPanel extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('api/events')
            .then((events) => {
                this.setState({ events: events.data })
            })
            .catch(error => console.log('ERROR', error))
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h2 className="text-center">Admin Panel</h2>
                </div>
                <div className="col-md-12 text-right">
                    <Link to={'/addEvent'} className="btn-link"><b>Add New Event</b></Link>
                </div> 
            </div>
            <hr/>
            <div className="card">
                <h3 className="card-header text-center">
                    Events
                </h3>
                <div className="card-body">
                    <div className="row">
                        
                    </div>
                <hr/>
                {this.state.events.map(event => {
                    return (
                        <ul className="list-group" key={event.id}>
                            <li className="list-group-item">{event.id} <span className="text-secondary"> {event.name}</span></li>
                        </ul>
                    )
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default AdminPanel;
