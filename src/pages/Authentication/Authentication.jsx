import React,{useState,useEffect} from 'react'
import './authentication.css';
import Login from './Login';
import Register from './Register';
import './utils.css';
function Authentication() {
	const [currentImage,setCurrentImage]=useState(0);
	const [showLogin, setShowLogin] = useState(true);

	const handleCreateAccountClick = () => {
	  setShowLogin(false);
	};
  
	const handleAlreadyHaveAccountClick = () => {
	  setShowLogin(true);
	};
  
    const images = [
    'assets/background/sara-kurfess-6lcT2kRPvnI-unsplash.jpg',
    'assets/background/jakob-owens-WUmb_eBrpjs-unsplash.jpg',
    'assets/background/istockphoto-1409255608-170667a.jpg',
    'assets/background/istockphoto-1408387701-170667a.jpg',
    'assets/background/istockphoto-1367909982-170667a.jpg',
    'assets/background/istockphoto-1367616995-170667a.jpg',
    'assets/background/istockphoto-1346575545-170667a.jpg',
    'assets/background/istockphoto-1344252956-170667a.jpg'];
    useEffect(() => {
        // automatically switch to the next image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);
  const loginClassName = `form-slide ${showLogin ? 'slide-enter' : 'slide-exit'}`;
  const registerClassName = `form-slide ${showLogin ? 'slide-exit' : 'slide-enter'}`;
  return (
	<div className="Container">
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
		<div className="form-container">
              <div className="form-content">
                <div className={loginClassName}>
                  <Login onCreateAccountClick={handleCreateAccountClick} />
                </div>
                <div className={registerClassName}>
                  <Register onAlreadyHaveAccountClick={handleAlreadyHaveAccountClick} />
                </div>
              </div>
            </div>
           <div className="login100-more"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(202, 136, 136, 0.4)),url(${images[currentImage]})`}}>
            </div>
        </div>
      </div>
      </div>
	  </div>
  );
}

export default Authentication