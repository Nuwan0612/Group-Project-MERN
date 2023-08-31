import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/UpdateStyles.css'

const UpdateForm = () => {
  const { user } = useAuthContext()

  const navigate = useNavigate()

  const location = useLocation();
  const reservation = location.state?.reservation;

  const [fname, setFname] = useState(reservation.fname)
  const [days, setDays] = useState(reservation.days)
  const [lname, setLname] = useState(reservation.lname)
  const [nic, setNic] = useState(reservation.nic)
  const [room, setRoom] = useState(reservation.room)
  const [members, setMembers] = useState(reservation.members)
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
      return
    }

    const updatedReservation = {fname, lname, nic, room, members, days}

    const response = await fetch('api/reservation/' + reservation._id, {
      method: 'PATCH',
      body: JSON.stringify(updatedReservation),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if(!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if(response.ok){
        navigate('/')
    }
  }

    return(
      <form className="update" onSubmit={handleSubmit}>
        <h1>Reservation Details</h1>

        <label>First Name:</label>
        <input
          type="text"
          onChange={(e) => setFname(e.target.value)}
          placeholder={fname}
          className={emptyFields.includes('fname') ? 'error' : ''}
        />

        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => setLname(e.target.value)}
          placeholder={lname}
          className={emptyFields.includes('lname') ? 'error' : ''}
        />

        <label>NIC:</label>
        <input
          type="text"
          onChange={(e) => setNic(e.target.value)}
          placeholder={nic}
          className={emptyFields.includes('nic') ? 'error' : ''}
        />

        <label>Room Number:</label>
        <input
          type="text"
          onChange={(e) => setRoom(e.target.value)}
          placeholder={room}
          className={emptyFields.includes('room') ? 'error' : ''}
        />

        <label>Members:</label>
        <input
          type="number"
          onChange={(e) => setMembers(e.target.value)}
          placeholder={members}
          className={emptyFields.includes('members') ? 'error' : ''}
        />

        <label>Days:</label>
        <input
          type="number"
          onChange={(e) => setDays(e.target.value)}
          placeholder={days}
          className={emptyFields.includes('days') ? 'error' : ''}
        />

        <button className='add-button'>Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}

export default UpdateForm