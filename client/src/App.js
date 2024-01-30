import { useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer}/>
      {
       <DrawerSidebar  
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}   
       />
      }
      <AllRoutes/>
    </Router>
  );
}

export default App;
