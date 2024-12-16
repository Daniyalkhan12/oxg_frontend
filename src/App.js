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

  const [selectedComponent, setSelectedComponent] = useState('Home'); // Default selected component
  const [currentCategory, setCurrentCateogry] = useState(0);
  useEffect(() => {
    // Update the page title based on the selected component
    document.title = `Material Manager - ${selectedComponent}`; 
  }, [selectedComponent]);

  const handleComponentChange = (newComponent) => {
    const itemValue = newComponent.split("%")
    setSelectedComponent(itemValue[0]);
    setCurrentCateogry(itemValue[1])
  };
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
          <NavBar setIsLoggedIn={setIsLoggedIn}/>
          <div className="container">
            <Sidebar 
        selectedComponent={selectedComponent} 
        onComponentChange={handleComponentChange} />
            <div className="main-content">
              <div className="row"
                    style={{
                      textAlign: 'center', 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      display: 'block'
                    }}>
                    {selectedComponent}
              </div>
              <div className="row">
                <ProductInformation categoryID={currentCategory}/>
                <Pdf categoryID={currentCategory}/>
              </div>
              <div className="row">
                <Table categoryID={currentCategory} />
                <Brandschutzrohr />
              </div>
              <div className="row">
                <ProductImage categoryID={currentCategory}/>
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