import React, { Component } from 'react'

class CreateRental extends Component {

    state = {
        address: null,
        contact: null,
        move_in: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="contact">Contact</label>
                        <input type="text" id="contact" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="move_in">Move In Date</label>
                        <input type="text" id="move_in" onChange={this.handleChange} />
                    </div>
                    <button className="btn red darken-3 hoverable">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateRental