import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// import { register } from '../actions/userAction';

export default function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state =>state.userRegister);
    // const {loading, userInfo, error } = userRegister

    const dispatch = useDispatch();

    const redirect = props.location.search? props.location.search.split("=")[1]:'/';

    const submitHandler = (e) =>{
        e.preventDefault();
        // dispatch(register(name, email, password, rePassword))
    }
    

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
                                <h2>Buat Akun</h2>
                            </li>
                            {/* <li>
                                {loading && <div>Loading...</div>}
                                {error && <div>{error}</div>}
                            </li> */}
                            <li>
                                <label htmlFor="name">
                                    Nama
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    // placeholder="Masukan Nama Anda"  
                                    required
                                    onChange={(e) => setName(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    // placeholder="Masukan email Anda"  
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
                                <label htmlFor="rePassword">Masukan Kembali Password</label>
                                <input 
                                    type="password" 
                                    id="rePassword" 
                                    name="rePassword" 
                                    // placeholder="Masukan kembali Password Anda"  
                                    required
                                    onChange={(e) => setRePassword(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <button type="submit" className="btn">Buat Akun</button>
                            </li>
                            <div className="regis">
                                Sudah Punya Akun? 
                                <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}><b> Masuk</b></Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}
