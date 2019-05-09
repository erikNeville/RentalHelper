import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRental } from '../store/actions/rentalActions'

class CreateRental extends Component {

    state = {
        address: '',
        contact: '',
        move_in: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createRental(this.state);

        // redirect to dashboard
        this.props.history.push('/');
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

const mapStateToProps = (state) => {
    // attach auth status to props (not yet)
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRental: (rental) => dispatch(createRental(rental))
    }
}

export default connect(null, mapDispatchToProps)(CreateRental)