import { Routes, Route} from "react-router-dom"
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { UserAuthContextProvider, useUserAuth } from "./context/UserAuthContext";
import {Home} from "./views/Home"
import {ProtectedRoute} from "./components/ProtectedRoute"
import { Favorites } from "./views/Favorites";
import { TvShows } from "./views/TvShows";
import { MoviesList } from "./views/MoviesList";
import { DataProvider } from "./context/Data";
import { Results } from "./views/Results";
import { SingleMovieInfo } from "./views/SingleMovieInfo";
import {ForgotPassword} from "./views/ForgotPassword"

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/tvshows" element={<ProtectedRoute><TvShows /></ProtectedRoute>} />
          <Route path="/movieslist" element={<ProtectedRoute><MoviesList /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
          <Route path="/singlemovie/:type/:id" element={<ProtectedRoute><SingleMovieInfo /></ProtectedRoute>} />
        </Routes>
        </DataProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;