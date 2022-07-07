import './styles/App.css'
import Create from './components/Create';
import Read from './components/Read';
import { Routes, Route, Link } from 'react-router-dom'
import Update from './components/Update';
import Home from './components/Home';

function App() {
  return (
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>

        <Link to="/">Home</Link>
        <Link to="/Create">Create</Link>
        <Link to="/Read">Read</Link>

        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Create" element={<Create />}/>
            <Route path="/Read" element={<Read />}/>
            <Route path="/Update" element={<Update />}/>
          </Routes>
        </div>
      </div>
    
  );
}

export default App;