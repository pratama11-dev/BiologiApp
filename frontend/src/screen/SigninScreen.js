import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {

    const [ email, setEmail ]= useState('');
    const [ password, setPassword ] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    
    const userSignin = useSelector((state) => state.userSignin);
    const{ loading, error, userInfo } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email, password));
    };
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[ props.history, redirect, userInfo]);

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-2">
                        <img src="../img/stetoskop.png" />
                    </div>
                    <div className="col-2">
                        <ul className="form-container">
                            <li>
                                <h2>Masuk</h2>
                            </li>
                            <li>
                                {loading && <LoadingBox></LoadingBox>}
                                {error && <MessageBox variant="danger">{error}</MessageBox>}
                            </li>
                            <li>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    // placeholder="Masukan Email Anda" 
                                    required
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    // placeholder="Masukan Password Anda"  
                                    required
                                    onChange={(e) => setPassword(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <button type="submit" className="btn">
                                    Masuk
                                </button>
                            </li>
                            <div className="regis">
                                Belum punya akun? <Link to="/register"><b> Buat Akun</b></Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}
