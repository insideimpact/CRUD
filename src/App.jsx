import './styles/App.css'
import Create from './components/Create';
import Read from './components/Read';
import { Routes, Route, Link } from 'react-router-dom'
import Update from './components/Update';
import Home from './components/Home';

function App() {
  return (
    <body className='body'>
      <header className='headstyle' align='center'> 
        <ul className='headul'>
          <li className='headli'><Link to="/" className='linkstyle'>Home</Link></li>
          <li className='headli'><Link to="/Create" className='linkstyle'>Create</Link></li>
          <li className='headli'><Link to="/Read" className='linkstyle'>Read</Link></li>
        </ul>
      </header>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Create" element={<Create />}/>
            <Route path="/Read" element={<Read />}/>
            <Route path="/Update" element={<Update />}/>
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;