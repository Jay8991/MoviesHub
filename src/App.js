import { Routes, Route} from "react-router-dom"
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UserAuthContextProvider, useUserAuth } from "./context/UserAuthContext";
import {Home} from "./views/Home"
import {ProtectedRoute} from "./components/ProtectedRoute"
import { Favorites } from "./views/Favorites";
import { TvShows } from "./components/TvShows";
import { MoviesList } from "./components/MoviesList";
import { DataProvider } from "./context/Data";
import { ForgotPassword } from "./components/ForgotPassword";
import { Results } from "./components/Results";
import { SingleMovieInfo } from "./components/SingleMovieInfo";

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
          <Route path="/singlepage" element={<ProtectedRoute><SingleMovieInfo /></ProtectedRoute>} />
        </Routes>
        </DataProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;