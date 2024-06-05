import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import MedicineSchedule from "./pages/MedicineSchedule";

function App() {
  return (
    <div>
   <Router>
    <Routes>
      <Route  path='/' element={ <Homepage /> } />
      <Route  path='/about-us' element={ <About /> } />
      <Route  path='/book-appointment' element={ <Appointment /> } />
      <Route  path="/schedule-medicine" element={<MedicineSchedule />} />

    </Routes>
   </Router>
    </div>
  );
}

export default App;
