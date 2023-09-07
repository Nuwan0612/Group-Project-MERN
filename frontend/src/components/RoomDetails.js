import { useRoomContext } from '../hooks/useRoomContext'
import { useNavigate } from 'react-router-dom';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const RoomDetails = ({ room }) => {
  const { dispatch } = useRoomContext()
  const navigate = useNavigate()

  const handleDelete = async () => {
    const response = await fetch('/api/room/' + room._id, {
      method: 'DELETE',
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_ROOM', payload: json })
    }
  }

  const handleUpdate = async () => {
    navigate('/room-update', {state: {room}})
  }

  return (
    <div className="details">
      <h4>{room.roomNo}</h4>
      <p><strong>Room Type : </strong>{room.roomType}</p>
      <p><strong>Room Rates : </strong>{room.roomRates}</p>
      <p><strong>Air Conditioning  : </strong>{room.airConditioning}</p>
      <p><strong>Room Status : </strong>{room.roomStatus}</p>
      <p>{formatDistanceToNow(new Date(room.createdAt), { addSuffix: true })}</p>
      <button className="delete-btn" onClick={handleDelete}>delete</button>
      <button className="update-btn" onClick={handleUpdate}>update</button>
    </div>
  )
}

export default RoomDetails
