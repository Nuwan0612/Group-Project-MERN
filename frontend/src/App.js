import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages & componments
import Reservation from './pages/Reservation'
import Employee from './pages/Employee'
import EmployeeUpdate from './components/EmployeeUpdate'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Update from './components/UpdateReservation'
import Food from "./pages/Food";
import FoodUpadte from './components/FoodUpdate'

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Reservation /> : <Navigate to="/login" />}
            />
            <Route
              path="/food"
              element={user ? <Food /> : <Navigate to="/login" />}
            />
            <Route
              path="/food-update"
              element={user ? <FoodUpadte /> : <Navigate to="/login" />}
            />
            <Route
              path="/employee"
              element={user ? <Employee /> : <Navigate to="/login" />}
            />
            <Route
              path="/employee-update"
              element={user ? <EmployeeUpdate /> : <Navigate to="/login" />}
            />
            <Route
              path="/reservation-update"
              element={user ? <Update /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
