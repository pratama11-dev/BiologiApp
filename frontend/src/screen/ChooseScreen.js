import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAlat } from '../actions/alatAction'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';

export default function ChooseScreen() {

    const dispatch = useDispatch();
    const alatList = useSelector( state => state.alatList);
    const { loading, error, alat } = alatList;

    useEffect(() => {
        dispatch(listAlat());
    }, []);

    return (
        <div className="container">
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
                        <div key={alat.id}>
                            <div className="tittle">
                                <h3>{alat.nama}</h3>
                            </div>
                            <div className="btn">
                                <Link to={"/prepare/" + alat._id}>
                                    Coba Sekarang!
                                </Link>
                            </div>
                        </div>
                    </>)}
                </div>
                <div className="btnArah">
                        <Link to="/"><DoubleLeftOutlined /></Link>
                </div>
            </div>
            }
        </div>
    )
}
