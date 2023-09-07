import { useEmployeeContext } from "../hooks/useEmployeeContext"
import { useNavigate } from 'react-router-dom';

//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const EmployeeDetails = ({employee}) => {
    const {dispatch} = useEmployeeContext()
    const navigate = useNavigate()

    const handleDelete = async () => {
        const response = await fetch('/api/employee/' + employee._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_ITEM', payload: json})
        }
    }

    const handleUpdate = async () => {
        navigate('/employee-update', {state: {employee}})
      }

    return(
        <div className="details">
            <h4>{employee.name}</h4>
            <p><strong>Contact: </strong>{employee.contact}</p>
            <p><strong>Job: </strong>{employee.job}</p>
            <p><strong>Salary: </strong>{employee.salary}</p>
            <p>{formatDistanceToNow(new Date(employee.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
            <button className="material-symbols-outlined" onClick={handleUpdate}>edit</button>
        </div>
    )
}

export default EmployeeDetails