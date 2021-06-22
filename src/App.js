import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="container">
       {/* navigation section */}
       <Navbar />

       {/* dashboard section */}
       <Dashboard />
       
       
    </div>
  );
}

export default App;
