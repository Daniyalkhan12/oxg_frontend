import './App.css';
import Login from './component/Login/login'; // Import the updated Login component
import NavBar from './component/NavBar/NavBar';
import Sidebar from './component/Sidebar/SideBar';
import ProductInformation from './component/ProductInformation/ProductInformation';
import Pdf from './component/Pdf/Pdf';
import Table from './component/Table/Table';
import Brandschutzrohr from './component/Brandschutzrohr/Brandschutzrohr';
import ProductImage from './component/ProductImage/ProductImage';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    // Check if user is logged in (e.g., by checking local storage)
    const storedToken = localStorage.getItem('token'); 
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <> 
          <NavBar />
          <div className="container">
            <Sidebar />
            <div className="main-content">
              <div className="row">
                <ProductInformation />
                <Pdf />
              </div>
              <div className="row">
                <Table />
                <Brandschutzrohr />
              </div>
              <div className="row">
                <ProductImage />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} /> 
      )}
    </div>
  );
}

export default App;