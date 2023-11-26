import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profile_setup from './pages/Profile_setup/Profile_setup';
import { ToastContainer } from "react-toastify";
import "../firebaseConfig";
import Loader from "./Components/Loader/Loader";
import Services from "./pages/Services/Services"
import  Navbar  from "./Components/Navbar/Navbar";

function App() {
  return (
   <Router>
        {/* <Navbar/> */}
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/profile/setup" element={<Profile_setup/>}/>
        <Route path="/service" element={<Services/>}></Route>
        <Route path="/loader" element={<Loader/>}/>
      </Routes>
      <ToastContainer
        position="bottom-right"
        newestOnTop
        theme="light"
      />
   </Router>
  )
}

export default App
