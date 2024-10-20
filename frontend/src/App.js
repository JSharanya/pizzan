import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './dashboard/Dashboard';
import DashboardLayout from './dashboard/DashboardLayout';
import UploadFood from './dashboard/UploadFood';
import ReservationManag from './dashboard/ReservationManag';
// import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}

      <Route path='/admin/dashboard' element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/admin/dashboard/menu' element={<UploadFood/>}/>
        <Route path='/admin/dashboard/reservation' element={<ReservationManag/>}/>
  
      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
