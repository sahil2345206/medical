import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import Homepage from "./pages/homepage";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import MedicineSchedule from "./pages/MedicineSchedule";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { store } from "./redux/store/store";

function App() {
  console.log("store  ", store.getState())
  return (
    <Provider store={store}>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/book-appointment' element={<Appointment />} />
          <Route path="/schedule-medicine" element={<MedicineSchedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
