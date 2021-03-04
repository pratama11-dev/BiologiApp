import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAlat } from '../actions/alatAction'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ChooseScreen() {

    const dispatch = useDispatch();
    const alatList = useSelector( state => state.alatList);
    const { loading, error, alat } = alatList;

    useEffect(() => {
        dispatch(listAlat());
    }, []);

    return (
        <div className="gird-container">
            {loading? <LoadingBox></LoadingBox>
            :
            error?<MessageBox>{error}</MessageBox>
            :
            <div className="container">
                <div className="tittle">
                    <h1>Macam-Macam Percobaan</h1>
                    <div className="border"></div>
                </div>
                <div className="topik">
                    {alat.map((alat) => <>
                        <div className="tittle" data-aos={"fade-down"} key={alat._id}>
                            <h3 key={alat._id}>{alat.nama}</h3>
                        </div>
                        <div className="btn" data-aos={"fade-right"}>
                            <Link to={"/prepare/" + alat._id}>
                                Coba Sekarang!
                            </Link>
                        </div>
                    </>)}
                </div>
            </div>
            }
        </div>
    )
}
