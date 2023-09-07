import { useMachinesContext } from "../hooks/useMachinesContext"
import { useNavigate } from 'react-router-dom';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MachineDetails = ({ machine }) => {
    const { dispatch } = useMachinesContext()
    const navigate = useNavigate()

    const handleClick = async () => {
        const response = await fetch('/api/machines/' + machine._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MACHINE', payload: json})
        }
    }

    const handleUpdate = async () => {
        navigate('/machine-update', {state: {machine}})
    }

    return (
        <div className="details">
            <h4>{machine.name}</h4>
            <p><strong>Description: </strong>{machine.description}</p>
            <p><strong>Status: </strong>{machine.status}</p>
            <p>{formatDistanceToNow(new Date(machine.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            <button className="material-symbols-outlined" onClick={handleUpdate}>edit</button>
        </div>
    )
}

export default MachineDetails