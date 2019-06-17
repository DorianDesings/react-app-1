import React from 'react'
import PropTypes from 'prop-types';
import Appointment from './Appointment';

const ListAppointments = ({ appointments, deleteAppointment }) => {
    //message to know if there are appointments or not
    const message = Object.keys(appointments).length === 0 ? 'No appointments' : 'Manage your appointments'
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
                <div className="list-appointments">
                    {appointments.map(appointment => (
                        <Appointment
                            key={appointment.id}
                            appointment={appointment}
                            deleteAppointment={deleteAppointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

ListAppointments.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}


export default ListAppointments