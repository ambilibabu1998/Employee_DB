
import './App.css';
import EmployeeDashboard from './components/EmployeeDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Empform from './components/Empform';


function App() {
  return (
    <div className="my-app">
    
    <BrowserRouter>
    <Routes>
     <Route path="/" exact element={<EmployeeDashboard/>}/>
     <Route path="/employee-form" exact element={<Empform></Empform>}/>
    </Routes>
    </BrowserRouter>


    
    </div>
  );
}

export default App;
