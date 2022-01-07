import { Routes, Route} from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UserAuthContextProvider, useUserAuth } from "./context/UserAuthContext";
import {Home} from "./views/Home"
import {ProtectedRoute} from "./components/ProtectedRoute"
import { Favorites } from "./views/Favorites";
import { TvShows } from "./components/TvShows";
import { MoviesList } from "./components/MoviesList";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/tvshows" element={<ProtectedRoute><TvShows /></ProtectedRoute>} />
          <Route path="/movieslist" element={<ProtectedRoute><MoviesList /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;