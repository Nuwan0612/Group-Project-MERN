import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages & componments
import Reservation from './pages/Reservation'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Update from './components/UpdateReservation'

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
            path="/update"
            element={user ? <Update /> : <Navigate to="/login" />}
            />
            <Route 
            path="/login"
            element={!user ? <Login />: <Navigate to="/" />}
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
