import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  InstagramOutlined,
  UserOutlined,
  CloseOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import HomeScreen from './screen/HomeScreen.js';
import PrepareScreen from './screen/PrepareScreen.js';
import ChooseScreen from './screen/ChooseScreen';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userAction';


function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const{ userInfo } = userSignin;

  const discpatch = useDispatch();
  
  const signoutHandler = () => {
    discpatch(signout());
  }

  return (
    <BrowserRouter>
      <header className="row">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./logo1.png" alt=""/>
            </Link>
          </div>
          <nav className="menu">
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#"><UserOutlined />
                    <p>{userInfo.name}</p>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}><CloseOutlined /><p>Keluar</p></Link>
                    </li>
                    <li>
                      <Link to="/dashboard"><DashboardOutlined /><p>Dashboard</p></Link>
                    </li>
                  </ul>
                </div>
              ) :
              (
                <Link to="/signin"><UserOutlined /><p>Masuk</p></Link>
              )
            }
          </nav>
        </div>
      </header>
    

      <main>
        <Route path="/prepare/:id" component={PrepareScreen} />
        <Route path="/choose" component={ChooseScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </main>

      <footer>
        <div className="footer">
          <div className="small-container">
            <div className="row">
              <div className="footer-col-1">
                <Link to="/">
                  <img src="./logo.png" alt=""/>
                </Link>
              </div>
              <div className="footer-col-2">
                <h3>Dikembangkan Oleh :</h3>
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
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
