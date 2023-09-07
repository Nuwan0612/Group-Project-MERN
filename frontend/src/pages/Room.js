import { useEffect } from 'react'
import { useRoomContext } from '../hooks/useRoomContext'

// components 
import RoomDetails from '../components/RoomDetails'
import RoomForm from '../components/RoomForm'
import Layout from "../components/Layout"

const Room = () => {
    const {rooms, dispatch} = useRoomContext()

    useEffect (()=> {
        const fetchRooms = async () => {
            const response = await fetch('api/room')
            const json = await response.json()

            if (response.ok) {
                dispatch(({type: 'SET_ROOMS', payload: json}))
            }
        }

        fetchRooms()

    }, [dispatch]) 

    return(
        <Layout>
            <div className="rooms">
                {rooms && rooms.map((room)=> (
                    <RoomDetails key={room._id} room={room}/>
                ))}
            </div>
            <RoomForm/>
        </Layout>
    )
}

export default Room 