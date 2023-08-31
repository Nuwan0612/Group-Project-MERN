import { useEffect } from "react"
import { useEmployeeContext } from "../hooks/useEmployeeContext"

//components
import EmployeeDetails from '../components/EmployeeDetails'
import EmployeeForm from '../components/EmployeeForm'
import Layout from "../components/Layout"



const Employee = () => {

    const {employees, dispatch} = useEmployeeContext()

    useEffect(() =>{
        const fetchItems = async () => {
            const response = await fetch('/api/employee')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_ITEMS', payload: json})
            }
        }

        fetchItems()
    }, [dispatch])

    return (
        <Layout>
            <div className="employees">
                {employees && employees.map((employee) => (
                    <EmployeeDetails key={employee._id} employee={employee} />
                ))}
            </div>
            <EmployeeForm />
        </Layout>
    )
}

export default Employee