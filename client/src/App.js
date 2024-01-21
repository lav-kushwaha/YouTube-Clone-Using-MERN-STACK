import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <AllRoutes/>
    </Router>
  );
}

export default App;
