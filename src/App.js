
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import NoteCreate from './components/NoteCreate';
import AllNote from './components/AllNote';
function App() {
  return (
    <div className="App">
      <h1>NOTES APP</h1>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/create" element={<NoteCreate/>}></Route>
        <Route path="/notes" element={<AllNote/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
