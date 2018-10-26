import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CreateEventForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            address: '',
            price: '',
            capacity: '',
            currency: 'CAD',
            startTime: '',
            endTime: '',
            timeZone: 'America/Chicago',
            invite: 'true'
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newEvent = this.state;

        axios.post('api/events/', newEvent)
            .then(() => {
                console.log('Event submited successfully!')
            })
            .catch(error => console.log('ERROR', error))

        // Clear State
        this.setState({
            name: '',
            description: '',
            address: '',
            price: '',
            capacity: '',
            currency: '',
            startTime: '',
            endTime: '',
            timeZone: '',
            invite: ''
        });

        this.props.history.push('/');
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Event data ", this.state)

    }
    
    render() {
        return (
        <div>
            <div className="row">
                <div className="col-md-6 mt-5 mb-2">
                    <Link to="/" className="btn btn-link"> 
                        <b><i className="fas fa-arrow-circle-left" /> Back to Dashboard</b>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="card-header text-center">Add Event</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                required
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="description"
                                required
                                onChange={this.onChange}
                                value={this.state.description}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="address"
                                onChange={this.onChange}
                                value={this.state.address}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="price"
                                required
                                onChange={this.onChange}
                                value={this.state.price}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="capacity">Capacity</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="capacity"
                                required
                                onChange={this.onChange}
                                value={this.state.capacity}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currency">Currency</label>
                            <select className="form-control" id="exampleFormControlSelect1" 
                                onChange={this.onChange} value={this.state.currency} name="currency" required
                            >
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                                <option value="CAD">CAD</option>

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="startTime">Start Time</label>
                            <input 
                                type="datetime-local" 
                                className="form-control"
                                name="startTime"
                                required
                                onChange={this.onChange}
                                value={this.state.startTime}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endTime">End Time</label>
                            <input 
                                type="datetime-local" 
                                className="form-control"
                                name="endTime"
                                required
                                onChange={this.onChange}
                                value={this.state.endTime}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="timeZone">timeZone</label>
                            <select className="form-control" id="exampleFormControlSelect1" 
                                onChange={this.onChange} value={this.state.timeZone} name="timeZone" required
                            >
                                <option value="America/Chicago">America/Chicago</option>
                                <option value="America/Phoenix">America/Phoenix</option>
                                <option value="Pacific/Honolulu">Pacific/Honolulu</option>

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="invite">Allow Invitaiton</label>
                            <select className="form-control" id="exampleFormControlSelect1" 
                                onChange={this.onChange} value={this.state.invite} name="invite" required
                            >
                                <option value="true">Allow</option>
                                <option value="false">Do no allow</option>
                            </select>
                        </div>

                        <input type="submit" value="Submit" className="btn btn-submit btn-block"/>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default CreateEventForm;
