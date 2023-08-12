import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='Dashboard' Component={Dashboard} element={<Dashboard/>}/>
      <Route path='Register' Component={Register} element={<Register/>}/>

    </Routes>
      </BrowserRouter>
    
  );
}

export default App;
