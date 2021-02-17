import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  InstagramOutlined,
  UserOutlined
} from '@ant-design/icons';
import HomeScreen from './screen/HomeScreen.js';


function App() {
  return (
    <BrowserRouter>
        <header className="row">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./logo.png"/>
            </Link>
          </div>

          <nav className="menu">
            <Link to="/signin"><UserOutlined /><p>Sign In</p></Link>
          </nav>
        </div>
      </header>
    

      <main>
        <Route path="/" exact={true} component={HomeScreen} />
      </main>

      <footer>
        <div className="small-container">
          <div className="row">
            <div className="footer-col-1">
              <Link to="/">
                <img src="./logo.png"/>
              </Link>
            </div>
            <div className="footer-col-2">
              <h3>Developed By</h3>
                <div className="follow">
                  <a href="https://www.instagram.com/adithyanuzpratama/">
                    <InstagramOutlined /> adithyanuzpratama
                    <br />
                  </a>
                </div>
              </div>
            </div>
              <hr />
              <p className="copyright">Copyright 2021 - Biology Lab</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
