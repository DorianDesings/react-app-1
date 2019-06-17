import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header'
import NewAppointment from './components/newAppointment';
import ListAppointments from './components/ListAppointments';

import './bootstrap.min.css'

class App extends Component {
  state = {
    appointments: []
  }

  componentDidMount() {
    const appointmentsStorage = localStorage.getItem('appointments')
    if (appointmentsStorage) {
      this.setState({
        appointments: JSON.parse(appointmentsStorage)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments))
  }

  createNewAppointment = (data) => {
    const newAppointments = [...this.state.appointments, data]

    this.setState({
      //con el mismo nombre solo hay que pasar uno. eso equivale a appointments:appointments
      appointments: newAppointments
    })
  }

  //Delete appointment
  deleteAppointment = (id) => {
    //Copy state
    const currentAppointments = [...this.state.appointments]

    //Filter
    const appointmentToRemove = currentAppointments.findIndex(appointment => appointment.id === id)

    //Update state
    this.setState({ appointments: [...currentAppointments.slice(0, appointmentToRemove), ...currentAppointments.slice(appointmentToRemove + 1)] })
  }
  render() {
    return (
      <div class="container">
        <Header title="Administrador Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              createNewAppointment={this.createNewAppointment}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListAppointments
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
