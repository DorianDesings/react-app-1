import React, { Component } from 'react'
import PropTypes from 'prop-types';
import uid from 'uid'

const stateInitial = {
    appointment: {
        pet: '',
        owner: '',
        appointment: '',
        hour: '',
        symptoms: ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...stateInitial }

    //Edit fields
    handleChange = (e) => {
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    //Send form
    handleSubmit = (e) => {
        e.preventDefault()

        //Extract state values
        const { pet, owner, appointment, hour, symptoms } = this.state.appointment
        //Validate
        if (pet === '' || owner === '', appointment === '' || hour === '', symptoms === '') {
            this.setState({
                error: true
            })

            return
        }

        //Generate appointment
        const createNewAppointment = { ...this.state.appointment }
        createNewAppointment.id = uid(3)

        //Add
        this.props.createNewAppointment(createNewAppointment)

        //State inicial
        this.setState({ ...stateInitial })
    }

    render() {

        const { error } = this.state

        return (
            <div class="card mt-5 px-5">
                <div className="card-body">
                    <h2 className="card-title text-center-mb-5">
                        Fill the form for a new appointment
                    </h2>

                    {
                        error ?
                            <div className="alert alert-danger mt-2">All fields are required</div>
                            : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Pet's Name
                        </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet's Name"
                                    name="pet"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.pet}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Pet owner
                        </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet owner"
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Appointment
                        </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="appointment"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.appointment}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hour
                        </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hour"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.hour}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Symptoms
                        </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="symptoms"
                                    placeholder="Describes the symptoms"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.symptoms}
                                >
                                </textarea>
                            </div>

                            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="New Appointment" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

NewAppointment.propTypes = {
    createNewAppointment: PropTypes.func.isRequired
}

export default NewAppointment