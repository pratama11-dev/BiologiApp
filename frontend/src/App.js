import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  InstagramOutlined,
  UserOutlined
} from '@ant-design/icons';
import HomeScreen from './screen/HomeScreen.js';
import PrepareScreen from './screen/PrepareScreen.js';
import ChooseScreen from './screen/ChooseScreen';


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
            <Link to="/signin"><UserOutlined /><p>Masuk</p></Link>
          </nav>
        </div>
      </header>
    

      <main>
        <Route path="/prepare/:name" component={PrepareScreen} />
        <Route path="/choose" component={ChooseScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </main>

      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <Link to="/">
                <img src="./logo.png"/>
              </Link>
            </div>
            <div className="footer-col-2">
              <h3>Dikembangkan Oleh</h3>
                <div className="follow">
                  <a href="https://www.instagram.com/adithyanuzpratama/">
                    <InstagramOutlined /> TIM
                    <br />
                  </a>
                </div>
              </div>
            </div>
              <hr />
              <p className="copyright">Copyright 2021 - Virtual Biology Lab</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
