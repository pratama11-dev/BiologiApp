import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  InstagramOutlined,
  UserOutlined,
  CloseOutlined,
  DashboardOutlined,
  LaptopOutlined,
  WarningOutlined
} from '@ant-design/icons';
import HomeScreen from './screen/HomeScreen.js';
import PrepareScreen from './screen/PrepareScreen.js';
import ChooseScreen from './screen/ChooseScreen';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userAction';
import DashboardScreen from './screen/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import PenelitianListScreen from './screen/PenelitianListScreen';
import PenelitianEditScreen from './screen/PenelitianEditScreen';
import SimulasiScreen from './screen/SimulasiScreen';


function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const{ userInfo } = userSignin;

  const discpatch = useDispatch();
  
  const signoutHandler = () => {
    discpatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="./logo1.png" alt=""/>
              </Link>
            </div>
            <nav className="menu">
              {userInfo && userInfo.isAdmin && (
                  <div className="dropdown">
                    <Link to="#"><WarningOutlined />
                      <p>Only Admin </p>
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/listpenelitian"><LaptopOutlined  /><p>Buat Penelitian</p></Link>
                      </li>
                      <li>
                        <Link to="/dashboard"><DashboardOutlined /><p>Dashboard</p></Link>
                      </li>
                    </ul>
                  </div>
                )}
              {
                userInfo ? (
                  <div className="dropdown">
                    <Link to="#"><UserOutlined />
                      <p>Hi, {userInfo.name}</p>
                    </Link>
                    <ul className="dropdown-content">
                      {/* <li>
                        <Link to="/dashboard"><DashboardOutlined /><p>Dashboard</p></Link>
                      </li>
                      <li>
                        <Link to="/penelitian"><LaptopOutlined  /><p>Buat Penelitian</p></Link>
                      </li> */}
                      <li>
                        <Link to="#signout" onClick={signoutHandler}><CloseOutlined /><p>Keluar</p></Link>
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
          <Route path="/prepare/:id" component={PrepareScreen} exact/>
          <Route 
            path="/alat/:id/edit"
            component={PenelitianEditScreen}
            exact
          />

          <Route path="/simulation" component={SimulasiScreen} exact/>

          <Route path="/choose" component={ChooseScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/signin" component={SigninScreen} />
          
          <Route path="/" exact={true} component={HomeScreen} />
          
          <AdminRoute 
            path="/dashboard" 
            component={DashboardScreen} 
            exact
          />
          <AdminRoute 
            path="/listpenelitian" 
            component={PenelitianListScreen} 
            exact
          />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
